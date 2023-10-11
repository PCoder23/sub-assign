const axios = require('axios');
const _ = require('lodash');

const fetchBlog = async () => {
    try {
        const response = await axios.get("https://intent-kit-16.hasura.app/api/rest/blogs", {
          headers: {
            'x-hasura-admin-secret': '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
          },
        });
        return response.data.blogs;
    } catch (error) {
        throw error;
    }
}

const getBlogStats = async () => {
    try {
        const blogs = await fetchBlog();

        const totalBlogs = blogs.length;

        const longestTitleBlog = _.maxBy(blogs, (blog) => blog.title.length);

        const blogsWithPrivacy = _.filter(blogs, (blog) =>
          _.includes(_.toLower(blog.title), 'privacy')
        );
        const uniqueTitles = _.uniqBy(blogs, 'title');

        const responseData = {
            totalBlogs,
            longestTitle: longestTitleBlog.title,
            blogsWithWordPrivacy: blogsWithPrivacy.length,
            uniqueTitles: uniqueTitles.map((blog) => blog.title),
        };
        return responseData;
    } catch (error) {
        throw error;
    }
}

const getBlogsSearchedByQuery = async (query) => {
    try {
        const blogs = await fetchBlog();

        const data = _.filter(blogs, (blog) => blog.title.toLowerCase().includes(query));

        return data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getBlogStats,
    getBlogsSearchedByQuery
};
