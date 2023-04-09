const dbconnect=require("./mongo")
const deleteData=async()=>{
    const data= await dbconnect();
    const result=await data.deleteOne(
        {name:'m'}
    ) ;
    console.warn(result)
}
deleteData();