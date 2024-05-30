import { Router } from "express";
import { 
    postBlog,
    getAllBlogs,
    getRecentBlogs,
    getBlogById,
    updateBlogByID
} from "../controller/blog.controller.js"
const router = Router();

router.route("/post-blog").post(postBlog);
router.route("/get-blogs").get(getAllBlogs);
router.route("/get-recent-blogs").get(getRecentBlogs);
router.route("/get-blog-byID/:id").get(getBlogById);
router.route("/update-blog-byID/:id").post(updateBlogByID);

export default router