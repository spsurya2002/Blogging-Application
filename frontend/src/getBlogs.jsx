// // src/components/BlogList.jsx
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BlogList = () => {
//     const [blogs, setBlogs] = useState([]);

//     useEffect(() => {
//         fetchBlogs();
//     }, []);

//     const fetchBlogs = async () => {
//         try {
//             const response = await axios.get('/api/v1/get-blogs');
//             setBlogs(response.data.data); // Adjust according to your API response
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <div>
//             <h1>Recent Blogs</h1>
//             {blogs.map((blog) => (
//                 <div key={blog._id}>
//                     <h3>{blog.blogTitle}</h3>
//                     <p>{blog.description}</p>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default BlogList;




// src/components/GetBlogList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './blogList.css'; // Assuming you create a CSS file for styling

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/v1/get-blogs');
            setBlogs(response.data.data); // Adjust according to your API response
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <h1>All Blogs</h1>
            <div className="blog-grid">
                {blogs.map((blog) => (
                    <div key={blog._id} className="blog-card">
                        <h3>{blog.blogTitle}</h3>
                        <p>{blog.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogList;
