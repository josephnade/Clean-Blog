const Post = require('../models/Post');

const getPostDetail = async(req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("post.ejs", {
        post: post,
    });
};

const getCreatePost = async(req, res) => {
    await Post.create(req.body);
    res.redirect("/");
};

const getUpdatePage = async(req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("update_post.ejs", {
        post: post,
    });
}

const updatePost = async(req, res) => {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/post/${req.params.id}`);
}

const deletePost = async(req, res) => {
    console.log("Çalışıyor.");
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
}

module.exports = {
    getPostDetail,
    getCreatePost,
    getUpdatePage,
    updatePost,
    deletePost,
}