const mysql = require("mysql2/promise");


let db

(async function (){
    if(db == undefined){
        db = await mysql.createConnection(process.env.STRING_CONN);
        console.log(process.env.STRING_CONN)
    }
    
})()

async function conn(sqlquery, list) {
   
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