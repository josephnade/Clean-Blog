const express = require('express');
const pageController = require('../controllers/page_controller');
const router = express.Router();


router.route("/").get(pageController.getIndexPage);
router.route("/about").get(pageController.getAboutPage);
router.route("/add_post").get(pageController.getAddPage);

module.exports = router