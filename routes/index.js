var express = require('express');
var router = express.Router();

let title = "The Luxury Hotel";

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: title });
});

/* GET about page. */
router.get('/about-us', function(req, res, next) {
    res.render('about', { title: title });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: title });
});



module.exports = router;