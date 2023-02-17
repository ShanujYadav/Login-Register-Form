const express=require('express')
const app=express()
const db=require('./models/connection')
const engine=require('express-handlebars').engine

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// default page
app.get("/",(req,res)=>{
    res.render('home')
})
  //login 
app.post("/loginF",(req,res)=>{
  const loginEmail=req.body.loginEmail
  const loginPass= req.body.loginPass
  // const user={loginEmail,loginPass}

 
  let sql=`select Email,Password from register where Email='${loginEmail}' and Password='${loginPass}'`
  db.query(sql, (err,result)=>{
    if(err) throw err
    else
    res.render('welcome')
   })
})
// reg form
app.get("/registration",(req,res)=>{
  res.render('reg')
})

// addUser
app.post("/addUser",(req,res)=>{
  const user={FName:req.body.fname,LName:req.body.lname,Email:req.body.email,Password:req.body.password}
  let sql='insert into `register` set ?'
  db.query(sql,user,(err,result)=>{
      if(err) throw err
      else
      res.render('sucess')
  })
})

const port=process.env.port||3000
app.listen(port,()=>console.log(`running at ${port}`))