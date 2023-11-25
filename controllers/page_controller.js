const Post = require('../models/Post');

const getIndexPage = async(req, res) => {
    const posts = await Post.find({});
    res.render("index.ejs", {
        posts: posts,
    });
};
const getAboutPage = (req, res) => {
    res.render("about.ejs");
};
const getAddPage = (req, res) => {
    res.render("add_post.ejs");
};

module.exports = {
    getAboutPage,
    getAddPage,
    getIndexPage,
}