const express=require("express");

const blog_router=express.Router();

blog_router.get('/',(req,res)=>{
    console.log("route navigation success"); 
})

module.exports = blog_router;