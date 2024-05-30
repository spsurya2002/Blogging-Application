// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './getBlogs.jsx';
import PostBlogForm from './blogPost.jsx';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/get-blogs" element={<BlogList />} />
                    <Route path="/post-blogs" element={<PostBlogForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
