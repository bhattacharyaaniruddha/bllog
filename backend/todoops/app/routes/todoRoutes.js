const express = require('express');
const controller = require('../controllers/todoController.js');
const router = express.Router();

router.route("/api/blog/createBlog")
.post(controller.createBlog);

router.route("/api/blog/getBlog")
.post(controller.getBlog);

router.route("/api/blog/getAllBlogs")
.get(controller.getAllBlogs);
    

module.exports = router;