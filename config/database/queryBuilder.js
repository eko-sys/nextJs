const conn = require('./connMysql');

let privateProps = new WeakMap();

class queryBuilder{
    
    constructor(){
        this.query;
        this.insertQuery;
        this.selectQuery;
        this.updateQuery;
        this.whereQuery;
        this.deleteQuery;
        this.orderByQuery;
        this.completeQuery;
        this.limitQuery;

        privateProps.set(this, { queryBuilding: () => {
            let { insertQuery, selectQuery, updateQuery, deleteQuery, whereQuery, orderByQuery, limitQuery } = this;
            if(selectQuery){
                this.completeQuery = selectQuery
                if(whereQuery){
                    this.completeQuery = selectQuery + ' ' + whereQuery;
                    if(limitQuery){
                        this.completeQuery = selectQuery + ' ' + whereQuery + ' ' + limitQuery;
                        if(orderByQuery){
                            this.completeQuery = selectQuery + ' ' + whereQuery + ' ' + orderByQuery+ ' ' + limitQuery;
                        }
                    }else if(orderByQuery){
                        this.completeQuery = selectQuery + ' ' + whereQuery + ' ' + orderByQuery;
                    }
                }else if(orderByQuery){
                    this.completeQuery = selectQuery + ' ' + orderByQuery;
                    if(limitQuery){
                       this.completeQuery = selectQuery + ' ' + orderByQuery + ' ' + limitQuery;
                    }
                }
            }else if(updateQuery){
                this.completeQuery = updateQuery + ' ' + whereQuery
            }else if(insertQuery){
                this.completeQuery = insertQuery
            }else if(deleteQuery){
                this.completeQuery = deleteQuery + ' ' + whereQuery;
            }
        }})
    }

    select(table){
        this.selectQuery = `SELECT * FROM ${table}`;
        return this;
    }

    insert(table, sets){
        let sqlQuery = `INSERT INTO ${table} SET `;
        let setData;
        for(let key in sets){
            setData += `${key} = "${sets[key]}", `;
            let undefinedRepl = setData.replace('undefined', '');
            const setDataLength = undefinedRepl.length
            const resultData = undefinedRepl.slice(0, setDataLength - 2);
            this.setObjValue = resultData

            this.insertQuery = sqlQuery + this.setObjValue;
        }

        return this;
    }

    update(table, sets){
        let sqlQuery = `UPDATE ${table} SET `;
        let setData;
        for(let key in sets){
            setData += `${key} = ${conn.escape(sets[key])}, `;
            let undefinedRepl = setData.replace('undefined', '');
            const setDataLength = undefinedRepl.length
            const resultData = undefinedRepl.slice(0, setDataLength - 2);
            this.setObjValue = resultData

            this.updateQuery = sqlQuery + this.setObjValue;
        }

        return this
    }

    where(setWhere){
        let sqlQuery = `WHERE `;
        let where;
        for(let key in setWhere){
            where += `${key} = ${conn.escape(setWhere[key])}, `;
            let undefinedRepl = where.replace('undefined', '');
            const whereLength = undefinedRepl.length;
            const resultWhere = undefinedRepl.slice(0, whereLength - 2);
            this.whereQuery = sqlQuery + resultWhere;
        }

        return this
    }
    
    delete(table){
        this.deleteQuery = `DELETE FROM ${table} `;
        return this
    }

    orderBy(col){
        let sqlQuery = `ORDER BY `;

        let order;
        for(let key in col){
            if(col >= 1){

            }else{
                order += `${key} ${col[key]}`;
                let undefinedRepl = order.replace('undefined', '');
                const whereLength = undefinedRepl.length;
                const resultWhere = undefinedRepl.slice(0, whereLength - 2);
                this.orderByQuery = sqlQuery + undefinedRepl;
            }
            
        }

        return this
    }

    limit(start, end){
        this.limitQuery = `LIMIT ${start}, ${end}`;

        return this
    }

    done(){
        privateProps.get(this).queryBuilding();
        
        this.whereQuery = null;
        this.orderByQuery = null
        this.limitQuery = null;
        this.selectQuery = null;
        this.updateQuery = null

        return this.completeQuery;
    }

}

const db = new queryBuilder;

module.exports = db;