/**
 * @description This file handles creating new routes using ExpressJS Router.
 * @returns {object} - router
 */

// Bring in Express.js and use their Router() function.
const router = require('express').Router();
// Use Node.js path lib. This will make it far easier to ensure your application works cross-platform.
const path = require('path');

// This is your home page.
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/index.html'));
});

// About page. Task time!!!! Change this to show your name and age when you go to /about. Add new stuff too!
router.get('/about', (req, res) => {
    res.json({
        name: 'YER NAME',
        age: 0
    });
});

// Blog file
router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, './public/views/blog.html'))
});

// "API" if you can call it that. 
router.post('/api', (req, res) => {

    // req.body brings back an object of the data sent. If you name a field 'email', you would then do req.body.email
    const name = req.body.name;
    res.send(`Hi, ${name}`);
});

// Export our routes so they can be used within our main application.
module.exports = router;