import mongoose,{Schema} from "mongoose";

const blogSchema = new Schema({
    blogTitle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true});

export const Blog = mongoose.model("Blog",blogSchema);