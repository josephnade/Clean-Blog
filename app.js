const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Post");

//CONSTANTS
const app = express();
const port = 3000;

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1/cleanblog-test-db", {
            serverSelectionTimeoutMS: 5000,
        });
        console.log("Veritabanına başarıyla bağlandı");
    } catch (error) {
        console.log(`Bir hata oluştu: ${error}`);
    }
}
connectDB();
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get("/", async(req, res) => {
    const posts = await Post.find({});
    console.log(posts);
    res.render("index.ejs", {
        posts: posts,
    });
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
app.post("/blogs", async(req, res) => {
    await Post.create(req.body);
    res.redirect("/");
});
app.listen(port, "localhost", () => {
    console.log(`Port ${port} dinleniyor...`);
});