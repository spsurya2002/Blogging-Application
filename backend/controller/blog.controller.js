import { Blog } from "../models/blog.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const postBlog = async (req,res)=>{
    try {
        const {blogTitle,description} = req.body;
        const blog =  await  Blog.create({
            blogTitle,
            description
          });
          return res.status(201).json(
            new ApiResponse(200, blog, "Blog created Successfully")
        )
    } catch (error) {
        console.log("Blog can't be created");
    }
}

const getAllBlogs = async (req,res)=>{
    try {
        const data = await Blog.find().sort({ createdAt: -1 });
         if(!data){
            throw new ApiError(400,"No blogs found in DB!!")
         }
          return res.status(201).json(
            new ApiResponse(200, data, "Blog found Successfully")
        )
    } catch (error) {
        console.log("Blog can't be found");
    }
}

const getRecentBlogs = async (req,res)=>{
    try {
        const data = await Blog.find().sort({ createdAt: -1 }).limit(3);
         if(!data){
            throw new ApiError(400,"No blogs found in DB!!")
         }
          return res.status(201).json(
            new ApiResponse(200, data, "Recent Blog found Successfully")
        )
    } catch (error) {
        console.log("Blog can't be found");
    }
}

const getBlogById = async (req,res)=>{
    try {
        const { id } = req.params;
        const data = await Blog.findById(id);
         if(!data){
            throw new ApiError(400,"No blogs found in DB of this id!!")
         }
          return res.status(201).json(
            new ApiResponse(200, data, "Blog found Successfully")
        )
    } catch (error) {
        console.log("Blog can't be found");
    }
}

const updateBlogByID = async (req,res)=>{
    try {
        const {id} = req.params;
        const { blogTitle, description} = req.body;
        const data = await Blog.findByIdAndUpdate(id, { blogTitle, description },{new:true});
         if(!data){
            throw new ApiError(400,"blog can't be updated!!")
         }
          return res.status(201).json(
            new ApiResponse(200, data, "Blog updated Successfully")
        )
    } catch (error) {
        console.log("Blog can't be updated");
    }
}


export {
    postBlog,
    getAllBlogs,
    getRecentBlogs,
    getBlogById,
    updateBlogByID

}