const express = require('express');
const router = express.Router();
const { projects }= require('../data.json')

router.get('/:id', (req, res) => {
    res.render('project', {
        prompt: projects[req.params.id].project_name
    });
});

module.exports = router;