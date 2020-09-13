const express = require('express');
const router = express.Router();
const appExpress = express();
const pw = require('node-php-password');
const jwt = require('jsonwebtoken');

const conn = require('../../config/database/connMysql');
const qb = require('../../config/database/queryBuilder');

router.post('/login', (req, res) => {
    const { email, password } = req.query;

    if(!email || !password){
        res.sendStatus(401);
    }else{
        const db = qb.select('users').where({email: email}).done();

        conn.query(db, (err, results, fields) => {
            if(results.length > 0){
                const passCheck = pw.verify(password, results[0].password);
                if(passCheck === true){
                    const token = jwt.sign({email}, process.env.TOKEN_LOGIN,{expiresIn: '365d'});
                    const response = {
                            status: true,
                            msg: 'success login',
                            token: token
                        };
                        
                        req.session.userLogin = {
                            token: token,
                            role: results[0].role_id
                        }
                    
                    res.status(200).json(response);
                }else{
                    const response = {
                            status: false,
                            msg: 'email atau password salah!'
                        };

                    res.status(403).json(response);
                }
            }else{
                const response = {
                    status: false,
                    msg: 'email atau password salah!'
                };

                res.status(403).json(response);
            }
        })
    }

});


module.exports = router;