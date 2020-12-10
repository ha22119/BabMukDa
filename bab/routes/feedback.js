var express = require('express');
var router = express.Router();
var model = require('../models/feedbackDAO');

router.post('/', function(req, res) {
  model.selectFeedback_something(req.body.num, (results)=>{
      res.render('feedback', { title: 'Express',
      list: results,
      isLogin: req.session.isLogin, 
      userEmail: req.session.userEmail,
      isAdmin : req.session.isAdmin
   });
  });
});

router.get('/feedback_something', function(req, res) { // 동의합니다 눌렀을때
  model.updateFeedback_((results)=>{
      res.render('feedback', { title: 'Express',
      list: results,
      isLogin: req.session.isLogin, 
      userEmail: req.session.userEmail,
      isAdmin : req.session.isAdmin
    });
  });
});

module.exports = router;