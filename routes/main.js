const express = require('express');
const router = express.Router();
const { projects } = require('../data.json')

// Renders index pug file on root route
router.get('/', (req, res) => {
    res.render('index', { projects });
});

// Renders about pug file on about route
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;