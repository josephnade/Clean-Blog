const express = require('express');
const photoController = require('../controllers/post_controller');
const router = express.Router();


router.route("/:id").get(photoController.getPostDetail);
router.route("/edit/:id").get(photoController.getUpdatePage);
router.route("").post(photoController.getCreatePost);
router.route("/:id").put(photoController.updatePost);
router.route("/:id").delete(photoController.deletePost);

module.exports = router