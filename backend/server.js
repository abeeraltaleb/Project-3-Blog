const express= require ("express");
const app =express();


const db=require("./db");
const Post=require("./post");

app.use(express.json())
console.log(Post);
app.get("/",(req,res)=>{
    res.json("Get is working");
})

app.get("/posts",(req,res)=>{
    Post.find({},(err,data)=>{
        if(err){
            console.log("Error :".err);
        }else{
            res.json(data);
        }
    })
    });
    app.post("/posts",(req,res)=>{
        Post.create(req.body,(err,data)=>{
            if(err){
                console.log("Error :".err);
            }else{
                res.json(data);
            }
        })
        });

app.listen(5000,()=>{
    console.log("SERVER IS WORKING");
})