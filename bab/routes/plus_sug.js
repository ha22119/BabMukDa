var express = require('express');
var model = require('../models/feedbackDAO');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('plus_sug', { 
    title: 'Express',
    isLogin: req.session.isLogin, 
    userEmail: req.session.userEmail,
    isAdmin : req.session.isAdmin
   });
});

module.exports = router;
