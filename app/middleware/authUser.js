const jwt = require('jsonwebtoken');
require('dotenv').config()

const conn = require('../../config/database/connMysql');
const qb = require('../../config/database/queryBuilder');

const authUser  = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const typeHeader = authHeader && authHeader.split(' ')[0];
    const tokenHeader = authHeader && authHeader.split(' ')[1];

    if(authHeader){
        if(typeHeader === 'Bearer'){
            jwt.verify(tokenHeader, process.env.TOKEN_LOGIN, (err, user) => {
                if(!user){
                    const response = {
                        status: false,
                        msg: 'wrong token',
                    }
                    res.status(401).json(response);
                }else{
                    const db = qb.select('users').where({email: user.email}).done();
                    conn.query(db, (err, results) => {
                        
                        req.user = user
                        
                        next();
                    })

                }
            });
        }else{
            res.sendStatus(403);
        }
    }else{
        res.sendStatus(403);
    }
    
}

module.exports = authUser;