var http = require('http');
var express = require('express');
var router = express.Router();
var ejs = require('ejs'); 
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Express' }); // ejs(html) 뿌려주기
  });

module.exports = router;