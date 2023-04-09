const dbconnect=require("./mongo")
const updateData=async()=>{
    const data= await dbconnect()
    const result=await data.updateMany(
        {name:'nokia'},{$set: {name:'nokia-pro',price:500}}
    );
    console.warn(result);
}
updateData();