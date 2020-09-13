const qb = require('../../config/database/queryBuilder');
const conn = require('../../config/database/connMysql');

const adminAccess = (req, res, next) => {

    const db = qb.select('users').where({email: req.user.email}).done();
    conn.query(db, (err, result) => {
        if(result[0].role_id === 1){
            next()
        }else{
            res.sendStatus(403)
        }
    })

}

module.exports = adminAccess