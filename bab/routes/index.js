var express = require('express');
var model = require('../models/usersDAO');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { 
    title: 'Express',
    isLogin: req.session.isLogin, 
    userEmail: req.session.userEmail,
    isAdmin : req.session.isAdmin
   });
});

router.post('/',(req,res)=>{
  if(req.body.email && req.body.pwd){
    model.selectUser(req.body.email,(results)=>{
      console.log('req.body: ', req.body);
      console.log(results);
      if(results.length === 0){ // 콜백함수 결과가 비어있는 경우
        res.send('<script type="text/javascript"> alert("가입된 이메일이 아닙니다."); window.location="/"</script>');
      }else{
          if(req.body.email === results[0].email && req.body.pwd === results[0].pwd){
          req.session.isLogin = true;
          req.session.userEmail = req.body.email;
          req.session.isAdmin = results[0].isadmin;
          res.send('<script type="text/javascript"> window.location="/main" </script>'); // 메인으로 이동
        }else{ // 이메일은 무조건 일치하는 값을 가져오므로 비밀번호만 일치하지 않는 경우
          res.send('<script type="text/javascript"> alert("비밀번호가 일치하지 않습니다."); window.location="/"</script>');
        }
      }
    });
  }else{ // 칸이 비어있는 경우
    res.send('<script type="text/javascript">alert("이메일 또는 비밀번호를 입력해주세요."); window.location="/"</script>');
  }
});


module.exports = router;
