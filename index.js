const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');
const _ = require('lodash');
const blogRoutes = require('./routes/BlogRoutes');

app.use("/api",blogRoutes);

// const fetchBlogs = async (req, res, next) => {
//   try {
//     const response = await axios.get("https://intent-kit-16.hasura.app/api/rest/blogs", {
//       headers: {
//         'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
//       },
//     });
//     req.data = response.data.blogs;
//     next(); 
//   } catch (error) {
//     console.error('Error fetching data:', error.message);
//     res.status(500).json({ error: 'Error fetching data' });
//   }
// };

// app.get('/api/blog-stats', fetchBlogs,async (req, res) => {
//     try {
//     const blogs = req.data;

//     const totalBlogs = blogs.length;

//     const longestTitleBlog = _.maxBy(blogs, (blog) => blog.title.length);

//     const blogsWithPrivacy = _.filter(blogs, (blog) =>
//       _.includes(_.toLower(blog.title), 'privacy')
//     );
//     const uniqueTitles = _.uniqBy(blogs, 'title');

//     const responseData = {
//         totalBlogs,
//         longestTitle: longestTitleBlog.title,
//         blogsWithWordPrivacy: blogsWithPrivacy.length,
//         uniqueTitles: uniqueTitles.map((blog) => blog.title),
//       };
//       res.json(responseData);
//     } catch (error) {
//       console.error('Error fetching or processing blog data:', error.message);
//       res.status(500).json({ error: 'Error fetching or processing blog data' });
//     }
//   });

//   app.get("/api/blog-search", fetchBlogs,async (req, res) => {
//     try{
//       const query = req.query.query.toLowerCase();
//       const blogs = req.data;

//       const data = _.filter(blogs, (blog) =>blog.title.toLowerCase().includes(query));

//       res.json({blogs:data});
//   }catch(error){
//       console.error('Error fetching or processing blog data:', error.message);
//       res.json({ error: 'Error fetching or processing blog data' });
//     }
//   });

  app.get('/',(req,res) => {
    res.json({endpoint1: '/api/blog-stats',endpoint2: '/api/blog-search?query=privacy'});
  })

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
