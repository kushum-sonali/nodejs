// const { MongoClient } = require('mongodb');
// const express = require("express");
// const app = express();
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://0.0.0.0:27017/';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'myProject';
// let results;
// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');
//   // the following code examples can be pasted here...
//   results = await collection.find({}).toArray();
  
//   return 'done.';
// }

// main()
//   .then()
//   .catch(console.error)
//   .finally(() => client.close());
// app.get('/',(req,res)=>{
//     res.send(results)
// })
// app.listen('5000',(req,res)=>{
//  console.log('hello');
// })


const {MongoClient}= require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const database='e-comm';
const client = new MongoClient(url);
async function getdata(){
  let result= await client.connect();
  let db= result.db(database);
  let collection = db.collection('product');
  let response= await collection.find({}).toArray();
  console.log(response);
}
getdata();