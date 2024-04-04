import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var total = 0;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.render("index.ejs");
})

app.post("/submit", (req,res) => {
    total = req.body['fname'].length + req.body['lname'].length;
    res.render("index.ejs", {
        totalNumbers : total,
    })
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})