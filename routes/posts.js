const express = require("express");
const router = express.Router();
const upload = require("../../The Move (MVC)/middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../../The Move (MVC)/middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);

router.post("/comment/:id",  postsController.commentPost);

router.post("/createPost", upload.single("file"), postsController.createPost);

router.put("/likePost/:id", postsController.likePost);

router.delete("/deletePost/:id", postsController.deletePost);

router.delete("/deleteComments/:id", postsController.deleteComment);

module.exports = router;
