const express = require("express");
const app = express();

const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/add_post", (req, res) => {
    res.render("add_post.ejs");
});

app.get("/post", (req, res) => {
    res.render("post.ejs");
});

app.listen(port, "localhost", () => {
    console.log(`Port ${port} dinleniyor...`);
});