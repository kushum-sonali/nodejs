const {MongoClient}= require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const database='e-comm';
const client = new MongoClient(url);
async function dbconnect(){
  let result= await client.connect();
  let db= result.db(database);
return  db.collection('product');

  
}
dbconnect().then((resp)=>{
resp.find({name:"mi"}).toArray().then((data)=>{
    console.log(dbconnect);
})
})

// dbconnect();
module.exports=dbconnect;