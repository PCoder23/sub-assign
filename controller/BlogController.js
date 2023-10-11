const _ = require('lodash');
const NodeCache = require('node-cache');
const blogUtils = require('../utils/BlogUtils');

const cache = new NodeCache({ stdTTL: 3600 });

const memoizedBlogStats = _.memoize(blogUtils.getBlogStats, () => 'analyticsCacheKey');
const memoizedSearchBlog = _.memoize(blogUtils.getBlogsSearchedByQuery, (query) => query);

const blogStats = async (req, res) => {
    try {
        const cachedData = cache.get('cachedBlogStats');
        if (cachedData) {
            res.json(cachedData);
        } else {
            const analyticsData = await memoizedBlogStats();
            cache.set('cachedBlogStats', analyticsData);
            res.json(analyticsData);
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}

const blogSearch = async (req, res) => {
    try {
        const query = req.query.query.toLowerCase();
        const cachedResults = cache.get(`cachedBlogSearch:${query}`);
        if (cachedResults) {
            res.json(cachedResults);
        } else {
            const searchResults = await memoizedSearchBlog(query);
            cache.set(`cachedBlogSearch:${query}`, searchResults);
            res.json({ blogs: searchResults });
        }
    } catch (error) {
        res.json({ error: error.message });
    }
}

module.exports = {
    blogStats,
    blogSearch
};
