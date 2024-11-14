const express = require("express")
const app = express()
const Database = require("better-sqlite3")
const path = require('path');
const dbPath = path.resolve(__dirname, '../images.db');
const db = new Database(dbPath)


app.use(express.urlencoded({ extended: true }));
app.use(express.json());//req.body
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

const addNewImage = db.prepare("INSERT INTO IMAGES (IMG_URL) VALUES (?)");
const getAllImages = db.prepare("SELECT * FROM IMAGES");


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/upload", (req,res) => {
    let input = req.body.url
    addNewImage.run(input);
    var rows = getAllImages.all().reverse();
    var html = "";

    for (let row of rows){
        let url = row.IMG_URL;

        html += `<img class='inline-block' src='${url}'/>`;
    }
    res.send(html)
    
})

app.get("/getImages", (req,res) => {
    var rows = getAllImages.all().reverse();
    var html = "";

    for (let row of rows){
        let url = row.IMG_URL;

        html += `<img class='inline-block' src='${url}'/>`;
    }
    res.send(html)
})

app.listen(3000, () => {
    console.log("server has begun");
})