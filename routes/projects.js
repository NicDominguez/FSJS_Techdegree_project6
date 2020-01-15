const express = require('express');
const router = express.Router();
const { projects } = require('../data.json')

router.get('/:id', (req, res) => {
    res.render('project', {
        projects, req 
    });

});


module.exports = router;