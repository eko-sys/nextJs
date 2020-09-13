const express = require('express');
const router = express.Router();
const qb = require('../../config/database/queryBuilder');
const conn = require('../../config/database/connMysql');

router.get('/info', (req, res) => {
    const {type} = req.query;
    if(!type){
        res.sendStatus(403)
    }

    const db = qb.select('users').where({email: req.user.email}).done();
    conn.query(db, (err, result) => {
        if(type === 'detail'){
            const response = {
                status: true,
                data : result[0]
            }
            res.json(response);

        }else if(type === 'history'){
            const {start, end} = req.query;

            if(start || end){
                const dbHistory = qb.select('history').where({user_id: result[0].id}).limit(start, end).orderBy({id: "DESC"}).done();
                conn.query(dbHistory, (err, results) => {
                    const response = {
                        status: true,
                        data : results
                    }
                    res.json(response)
                })
            }else{
                const dbHistory = qb.select('history').where({user_id: result[0].id}).orderBy({id: 'DESC'}).done();
                conn.query(dbHistory, (err, results) => {
                    const response = {
                        status: true,
                        data : results
                    }
                    res.json(response)
                })
            }
        }
    });
});

module.exports = router;