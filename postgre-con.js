const mysql = require("mysql2/promise");


async function conn(sqlquery, list) {
   const db = await mysql.createConnection(process.env.STRING_CONN);
    try{
        if(!list){
            console.log(sqlquery)
            const result = await db.query(sqlquery);
            return result[0];
        }

        console.log(sqlquery, list)
        
        const result = await db.query(sqlquery, list);
        return result[0];

       
    }catch(err){
        return err;
    }
    
}
   
module.exports = conn;