const express = require("express");
const router = express.Router();
const blogController = require('../controller/Blogs')
router.get("/blogs",blogController.getBlogs);
router.post("/blogs",blogController.postBlog);
router.get("/blog/:id",blogController.getBlog);
router.delete("/blog/:id",blogController.deleteBlog);
module.exports = router;
