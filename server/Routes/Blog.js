

const express = require('express');
const router = express.Router();
const Blog = require('../models/Blogs');

// Route: POST /blogs
// Description: Save a blog in the database
router.post('/blogs', async (req, res) => {
  const { name, email, title, blog, blogLink } = req.body;

  try {
    const newBlog = new Blog({
      name,
      email,
      title,
      blog,
      blogLink
    });

    await newBlog.save();

    res.json(newBlog);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});


// Description: Get a blog by ID
router.post('/getBlog', async (req, res) => {
    const { id } = req.body;
  
    try {
      const blog = await Blog.findOne({id});
  
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }

      res.json(blog);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  });
  

// Route: GET /blogs
// Description: Get all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.json(blogs);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// Route: DELETE /blogs/:id
// Description: Delete a blog by ID
router.delete('/removeBlog', async (req, res) => {
  const { id } = req.body;

  try {
    const deletedBlog = await Blog.findOneAndDelete({id});

    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
