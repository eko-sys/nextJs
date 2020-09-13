const express = require('express');
const router = express.Router();
const appExpress = express();
const fetch = require('node-fetch');
const qs = require('query-string');
const qb = require('../../config/database/queryBuilder');
const conn = require('../../config/database/connMysql');

router.patch('/update/product', (req, res) => {
    const { markup, type } = req.query;
    if(markup, type){

        const urlApi = 'https://www.atlantic-pedia.co.id/api/pulsa';
        const bodyData = qs.stringify({
            key: '8947f21c7241c99c216cb9972a86cda1e432c1a6d981256b8986090efd677240',
            action: 'services'
        });

        fetch(urlApi,{
            method: 'post',
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: bodyData
        }).then(result => result.json()).then(function(result){

            let numChanges = []
            result.data.map(data => {
                if(data.type === type){
                    numChanges.push('ok')
                    updateProduct(data, numChanges);
                }
            })
        });

        let totalChanges = [];
        function updateProduct(data, numChanges){
            const intMarkup = parseInt(markup);
            const intPrice = parseInt(data.price)
            const dataUpdate = {
                price: intPrice + intMarkup
            }

            const dbUpdate = qb.update('products', dataUpdate).where({product_code: data.code}).done();
            conn.query(dbUpdate, (err, result) => {
                totalChanges.push('ok');
                if(numChanges.length <= totalChanges.length){
                    const response = {
                        status: true,
                        msg: `success to update total update ${totalChanges.length}`
                    }

                    res.status(201).json(response);
                }
            });
        }

    }else{
        res.sendStatus(403);
    }
});

module.exports = router;