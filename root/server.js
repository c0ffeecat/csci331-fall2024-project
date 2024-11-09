const express = require("express")
const app = express()

used = true

app.use(express.json());//req.body


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/getInfo", (req,res) => {
    if (used){
        res.send("changed")
        used = false
    }else{
        res.send("unchanged")
        used = true
    }
    
})

app.listen(3000, () => {
    console.log("server has begun");
})