const express = require('express');
const router = express.Router();
// import { blogStats,blogSearch } from '../controller/BlogController';
const { blogStats,blogSearch } = require('../controller/BlogController');

router.get('/blog-stats',blogStats);
router.get('/blog-search', blogSearch);

module.exports = router;
