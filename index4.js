const express=require('express');
const app=express();
const path=require('path');
const publicpath=path.join(__dirname,'public');
app.set('view engine','ejs');
app.get('',(req,res)=>{
    const user={
        name:'sonali',
        email:'sonali@gmail.com',
        city:'patna',
        skills:['cpp','react']
    }
res.render('profile',{user})
});
// app.use(express.static(publicpath));
app.get('',(req,res)=>{
res.sendFile(`${publicpath}/index.html`)
});
app.get('/about',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`)
    });
app.listen(5000);