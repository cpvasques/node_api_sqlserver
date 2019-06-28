const sql = require('mssql'); 
const connStr = "Server=IP_ADDRESS;Database=DATA_BASE_NAME;User Id=USER;Password=PASS;";

function conectar(callback){
    sql.connect(connStr)    
        .then(conn => global.conn = conn)  
        .then(callback())
        .catch(err => console.log(err));  
}

function executarQuery(sqlQry, res){     
    global.conn.request()                
    .query(sqlQry)                
    .then(result => res.json(result.recordset))                
    .catch(err => res.json(err)); 
}

module.exports = { conectar, executarQuery }