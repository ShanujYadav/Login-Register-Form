const mysql=require('mysql')

// db connection 
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    pass:"",
    database:"reg"
})
db.connect((err)=>{
    if(err)
    console.log(err.sqlMessage)
    else
    console.log('db connected')
})
module.exports=db