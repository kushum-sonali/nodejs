const express=require('express');
const dbconnect=require("./mongo")
const app= express();
app.use(express.json())
async function connect(){
 db = await dbconnect();
}
connect();
app.get('/', async(req,res)=>{
 data=await db.find().toArray();
res.send(data);
console.log(data)
});
app.post('/',async (req,res)=>{
    data = await db.find().forEach(element => {
        
    })
        
    console.log(data)
    res.send(data)
})
app.listen(8000)