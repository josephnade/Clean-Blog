const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostScheme = new Schema({
    title: String,
    detail: String,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.model("Post", PostScheme);

module.exports = Post;