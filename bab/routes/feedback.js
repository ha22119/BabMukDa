var express = require('express');
var router = express.Router();
var model = require('../models/feedbackDAO');

router.get('/', function(req, res) {
  model.selectFeedback_something(req.body.num,(results)=>{
      res.render('feedback', { title: 'Express',
      list: results,
      isLogin: req.session.isLogin, 
      userEmail: req.session.userEmail,
      isAdmin : req.session.isAdmin,
      // isAnswer : req.body.isanswer
    });
  });
});

router.post('/feedback_agree', function(req, res) { // 내용 작성 후 post 했을때
  console.log('관리자? :'+req.session.isAdmin);
  console.log('번호 :'+req.body.num);
  model.updateFeedback_agree(req.body.num,(results)=>{
    //   res.render('feedback', { title: 'Express',
    //   list: results,
    //   isLogin: req.session.isLogin, 
    //   userEmail: req.session.userEmail,
    //   isAdmin : req.session.isAdmin
    // });
    res.send('<script type="text/javascript">alert("동의했습니다."); window.location="/main"</script>');
  });
});

router.post('/answer', function(req, res) { // 답변하기 클릭 후
  console.log('관리자? :'+req.session.isAdmin);
  console.log(req.body.num);
  console.log(req.body.answer);
  model.updateFeedback_answer(req.body.num, req.body.answer,(results)=>{
      //   res.render('feedback', { title: 'Express',
      //   list: results,
      //   isLogin: req.session.isLogin, 
      //   userEmail: req.session.userEmail,
      //   isAdmin : req.session.isAdmin
      // });
    res.send('<script type="text/javascript">alert("답변을 등록했습니다."); window.location="/main"</script>');
  });
});

router.post('/', function(req, res) {
  var num = req.body.childData[0]; //
  console.log('관리자? :'+req.session.isAdmin); // main에서 item 클릭해서 들어왔을때
  console.log('넘어온 데이터 :'+req.body.childData[0]);
  if(req.session.isAdmin == 1){
      model.selectFeedback_something(num, (results)=>{
          res.render('feedback_admin', { title: 'Express',
          list: results,
          isLogin: req.session.isLogin, 
          userEmail: req.session.userEmail,
          isAdmin : req.session.isAdmin,
          // isAnswer : req.body.isanswer
      });
    });
  }else{
    model.selectFeedback_something(num, (results)=>{
      res.render('feedback', { title: 'Express',
      list: results,
      isLogin: req.session.isLogin, 
      userEmail: req.session.userEmail,
      isAdmin : req.session.isAdmin
     });
    });
  }
});

module.exports = router;