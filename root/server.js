const express = require("express")
const app = express()


app.use(express.json());//req.body


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/getInfo", (req,res) => {
    res.send("changed")
})

app.listen(3000, () => {
    console.log("server has begun");
})