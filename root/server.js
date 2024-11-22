const express = require("express")
const multer = require("multer");
const app = express()
const Database = require("better-sqlite3")
const path = require('path');
const dbPath = path.resolve(__dirname, '../images.db');
const db = new Database(dbPath)



//config for uploading files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, 'public/images')); // Save files to 'uploads' directory
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });

const upload = multer({storage});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());//req.body
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));


const addNewImage = db.prepare("INSERT INTO IMAGES (IMG_URL) VALUES (?)");
const getAllImages = db.prepare("SELECT * FROM IMAGES");


app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/upload", upload.single("file"),(req,res) => {
    let input = req.body.url
    let image = req.file
    if (!input && image){
        input = "images/" + image.filename
    }else if(!image){
        res.send("<p>Error uploading<p/>")
        return
    }
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