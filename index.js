
const express=require("express");
const app=express();
const users=require("./MOCK_DATA.json");
const PORT=8000;

app.get('/users',(req,res)=>{
    return res.json(users);
});



app.listen(PORT,()=>console.log(`server is running at Port ${PORT}`))

