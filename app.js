const express = require("express");
const bp = require("body-parser")

const app = express();

app.use(bp.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/public"))
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/products",(req,res)=>{
    res.render("product");
})
app.get("/about",(req,res)=>{
    res.render("about");
})


app.listen(8080,()=>{
    console.log("server started on port 8080");
})