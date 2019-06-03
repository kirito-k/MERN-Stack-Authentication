const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    console.log('Login side');
    res.render('login');
});

router.get('/register', (req, res) => {
    console.log('Register side');
    res.render('register');
});

module.exports = router;
