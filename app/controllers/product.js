const express = require('express');
const router = express.Router();
const qb = require('../../config/database/queryBuilder');
const conn = require('../../config/database/connMysql');
const fetch = require('node-fetch');
const qs = require('query-string');
const checkLogin = require('../middleware/checkLogin');
const { response } = require('express');

router.get('/pulsa', (req, res) => {
    const db = qb.select('products').orderBy({price: 'ASC'}).done()
    conn.query(db, (err, results) => {
        const response = {
            status: true,
            data: results
        }
        res.json(response);
    })
});

router.post('/pulsa/request' , (req, res) => {
    const { action, service, target, trxid } = req.query;
    if(action){
        if(action == 'order'){
            if(!service || !target){
                res.sendStatus(403);
            }else{
                const dbUser = qb.select('users').where({email: req.user.email}).done();
                conn.query(dbUser, (err, result) => {
                    userSaldoCheck(result[0]);
                })
        
                function userSaldoCheck(user){
                    const db = qb.select('products').where({product_code: service}).done();
                    conn.query(db, (err, result) => {
                        if(result.length > 0){
                            if(user.saldo >= result[0].price){
                                const currSaldo = user.saldo - result[0].price;
                                apiRequest(user, currSaldo, result[0]);
                            }else{
                                const response = {
                                    status: false,
                                    msg: 'Saldo tidak cukup!'
                                }
            
                                res.status(403).json(response);
                            }
                        }else{
                            const response = {
                                status: false,
                                msg: 'Product tidak ditemukan!'
                            }
        
                            res.status(404).json(response);
                        }
                    })
                }
        
                function apiRequest(user, currSaldo, product){
                    const bodyData = qs.stringify({
                        action: 'order',
                        key: process.env.TOKEN_ATLANTIC,
                        service: service,
                        target: target
                    })
            
                    fetch('https://www.atlantic-pedia.co.id/api/pulsa', {
                        method: 'post',
                        headers:{
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        body: bodyData
                    }).then(res => res.json()).then(response => {
                        if(response.result === true){
                            updateUserSaldo(user, currSaldo);
                            insertToHistory(user, response, product);
                        }else{
                        res.status(501).json(response);
                        }
                    })
                }
        
                function updateUserSaldo(user, currSaldo){
                    const data = {
                        saldo: currSaldo
                    }
                    const db = qb.update('users', data).where({id: user.id}).done();

                    conn.query(db, (err, result) => {
                        
                    })
                }

                function insertToHistory(user, resApi, product){
                    const today = new Date();
                    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    const dateTime = date+' '+time;

                    const data = {
                        order_id: resApi.data.trxid,
                        name: product.product_name,
                        code: product.product_code,
                        target: target,
                        order_on: dateTime,
                        price: product.price,
                        type: product.type,
                        refund: 1,
                        user_id: user.id
                    }
                    const db = qb.insert('history', data).done();
                    conn.query(db, (err, result) => {
                        
                        const response = {
                            status: true,
                            msg: `Berhasil dibeli order anda ${resApi.data.trxid}`
                        }

                        res.json(response);

                    });
                }
            }

        }else if(action == 'status'){
            if(!trxid){
                res.sendStatus(403)
            }else{
                const apiUrl = `https://www.atlantic-pedia.co.id/api/pulsa`;
                const bodyData = qs.stringify({
                    key: process.env.TOKEN_ATLANTIC,
                    action: 'status',
                    trxid: trxid
                })

                fetch(apiUrl,{
                    method: 'post',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: bodyData
                }).then(res => res.json()).then(result => {
                    res.json(result)
                })

            }
        }


    }else{
        res.sendStatus(403);
    }
});

module.exports = router;