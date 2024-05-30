// // src/components/PostBlogForm.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const PostBlogForm = () => {
//     const [blogTitle, setBlogTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('/api/v1/post-blog', {
//                 blogTitle,
//                 description
//             });
//             setMessage(response.data.message);
//             setBlogTitle(''); // Clear the form fields after successful submission
//             setDescription('');
//         } catch (error) {
//             console.error('There was an error posting the blog!', error);
//             setMessage('Error creating blog');
//         }
//     };

//     return (
//         <div>
//             <h1>Create a Blog</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Blog Title:</label>
//                     <input
//                         type="text"
//                         value={blogTitle}
//                         onChange={(e) => setBlogTitle(e.target.value)}
//                     />
//                 </div>
//                 <div>
//                     <label>Description:</label>
//                     <textarea
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                     ></textarea>
//                 </div>
//                 <button type="submit">Post Blog</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default PostBlogForm;



// src/components/PostBlogForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostBlogForm.css';

const PostBlogForm = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/v1/get-recent-blogs');
            setBlogs(response.data.data); // Adjust according to your API response
         } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/post-blog', {
                blogTitle,
                description
            });
            setMessage(response.data.message);
            setBlogs([response.data.data, ...blogs]); // Add new blog to the list
            setBlogTitle(''); // Clear the form fields after successful submission
            setDescription('');
        } catch (error) {
            console.error('There was an error posting the blog!', error);
            setMessage('Error creating blog');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="blog-form">
                <h2>Create a New Blog</h2>
                <div className="form-group">
                    <label>Blog Title:</label>
                    <input
                        type="text"
                        value={blogTitle}
                        onChange={(e) => setBlogTitle(e.target.value)}
                        placeholder="Enter blog title"
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter blog description"
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">Post Blog</button>
            </form>
            {message && <p className="message">{message}</p>}

            <h1>Recent Blogs</h1>
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

export default PostBlogForm;

