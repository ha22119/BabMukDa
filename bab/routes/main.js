var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('main', { title: 'Express',
    isLogin: req.session.isLogin, 
    userEmail: req.session.userEmail
});
});
 
router.post('/', function(req, res) { // 로그인 되어있는 경우에만 메인으로 이동
  res.render('main', { title: 'Express' });
    
});

module.exports = router;
