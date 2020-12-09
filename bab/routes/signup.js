var express = require('express');
var model = require('../models/usersDAO');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('signup', { title: 'Express' }); // ejs(html) 뿌려주기
  });

  router.post('/', (req, res)=>{ // 회원가입 폼을 받았을때
    if(req.body.email && req.body.pwd && req.body.pwd_check && req.body.username && req.body.pwd === req.body.pwd_check){
      console.log('req.body: ', req.body);
      model.selectUser(req.body.email, (results)=>{
        console.log(results);
        if(results.length === 0){ // results[0] === null 안됨, results[0].email === null
          model.insertUser(req.body, ()=>{
            res.send('<script type="text/javascript">alert("가입완료"); window.location="/"</script>');
          });
        }
          else{ // 이미 존재하는 경우
            if (req.body.email === results[0].email){ // 이미 존재하더라도 혹시 모르니까 확인확인
            res.send('<script type="text/javascript">alert("이미 가입되어있는 이메일 입니다"); window.location="/"</script>');
          }
        }
      });
    }else{
      res.send('<script type="text/javascript">alert("비밀번호와 재입력한 비밀번호가 일치하지 않습니다."); window.location="/signup"</script>');
    }
  });
  
module.exports = router;