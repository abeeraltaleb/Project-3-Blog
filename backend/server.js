const express= require ("express");
const cors = require("cors");
const app =express();


const db=require("./db");
const Post=require("./post");
const User=require ('./user');

app.use(express.json());
app.use(cors());

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

    app.get("/article/:id",(req,res)=>{
        Post.findById({_id:req.params.id},(err,data)=>{
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
                res.json("Created this post Successfully");
            }
        })
        });

    app.delete("/posts/:id",(req,res)=>{
        Post.deleteOne({_id : req.params.id},(err,deleteObj)=>{
               
        if (err) {
            console.log("ERROR: ",err);
        }else{
            deleteObj.deletedCount===1
            ? res.json("Deleted this post Successfully")
            : res.status(404).json ("this post is not found")
        }
            })
            });
    

    // app.put("/posts/:id",(req,res)=>{
    //     //console.log("37:", req.params.id);
    //     Post.updateMany(
    //         {_id:req.params.id},
    //         {title:req.body.newTitle},
    //         {content:req.body.newContent},
    //         (err,updateObj)=>{
    //         if (err) {
    //         //console.log("ERROR: ",err);
    //         res.status(400).json(err)
    //         }else{
    //             console.log(updateObj);
    //             updateObj.modifiedCount===1
    //             ? res.json("update New post Successfully")
    //             : res.status(404).json ("this post is not found");
    //         }
    // })
    //     })

    //  app.put("/update/:id",(req,res)=>{
    //     //console.log("37:", req.params.id);
    //     Post.findById(req.params.id),{
        
    //         {title:req.body.newTitle},
    //         {content:req.body.newContent}}
    //         (err,updateObj)=>{
    //         if (err) {
    //         //console.log("ERROR: ",err);
    //         res.status(400).json(err)
    //         }else{
    //             console.log(updateObj);
    //             updateObj.modifiedCount===1
    //             ? res.json("update New post Successfully")
    //             : res.status(404).json ("this post is not found");
    //         }
    // })
    //     })


    // app.put("/update/:id",(req,res)=>{
    //     //console.log("37:", req.params.id);
    //     Post.findById(req.params.id)
    //     .then(article=>{
    //         article.title=req.body.title;
    //         article.content=req.body.content;
        
    //       Post
    //       .Save()
    //       .then(()=>("the post is updated successfuly"))
    //       .catch(err=>res.status(400).json("ERROR:",err))
    //         })
    //         .catch(err=>res.status(400).json("ERROR:",err))
    //     })  

    //USER
app.post("/users/register",(req,res)=>{
    User.create(req.body,(err,newUser)=>{
        if(err){
           //console.log("ERRO: ",err);
            res.status(400).json({message:"This email already taken"})

        }else{
            res.status(201).json({ message: "Create New User Successfully" });
        }
    });
});

app.post("/users/login", (req, res) => {
    User.find({ email: req.body.email }, (err, arrUserFound) => {
        if (err) {
        console.log("ERROR: ", err);
        } else {
        // console.log(arrUserFound);
        if (arrUserFound.length === 1) {
          // we found the user
            if (req.body.password === arrUserFound[0].password) {
            // password correct
            res.status(200).json({
                message: "Login Successfully",
                username: arrUserFound[0].username,
            });
            } else {
            // password incorrect
            res.status(400).json({
                message: "Wrong Password",
            });
            }
        } else {
            res.status(404).json({
            message: "The email entered is not registered",
            });
        }
        }
    });
  });

app.listen(5000,()=>{
    console.log("SERVER IS WORKING");
})