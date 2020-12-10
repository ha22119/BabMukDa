var express = require('express');
var router = express.Router();
var model = require('../models/feedbackDAO');

router.get('/', function(req, res) {
  model.selectFeedback((results)=>{
      // res.send(results);
      res.render('main', { title: 'Express',
      list: results,
      isLogin: req.session.isLogin, 
      userEmail: req.session.userEmail,
      isAdmin : req.session.isAdmin
    });
  });
});

router.get('/logout', (req, res)=>{
  req.session.destroy(function(err){
    if(err)
        console.log(`req.session.destroy error : ${err}`);
    res.redirect('/');
    console.log('로그아웃 됨');
  });
});

router.post('/plus_suggestion', function(req, res) { // insert가 들어온 경우
  // model.insertFeedback(req.body,userEmail,isAdmin, ()=>{
  //   res.send('<script type="text/javascript">alert("글작성 완료"); window.location="/"</script>');
  // });
  res.send(req);
});


module.exports = router;
