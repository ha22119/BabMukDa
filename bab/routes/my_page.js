var express = require('express');
var model_feedback = require('../models/feedbackDAO');
var model = require('../models/usersDAO');
var router = express.Router();

router.get('/', function(req, res) {
    model_feedback.selectFeedback_mine(req.session.userEmail,(results)=>{

        console.log(results);
        res.render('my_page', { title: 'Express',
        list: results,
        isLogin: req.session.isLogin, 
        userEmail: req.session.userEmail,
        isAdmin : req.session.isAdmin
        });
    });
  });

module.exports = router;