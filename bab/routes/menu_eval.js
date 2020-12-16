var express = require('express');
var model_menu = require('../models/menu');
var router = express.Router();

router.post('/', function(req, res) {
  model_menu.selectmenu_something(req.body.num,(results)=>{
      console.log(results[0]);
    res.render('menu_eval', {
      list : results,
      title: 'Express',
      isLogin: req.session.isLogin, 
      userEmail: req.session.userEmail,
      isAdmin : req.session.isAdmin
     });
  })
});
router.post('/delicious', function(req, res) {
    model_menu.updateMenu_del(req.body.num,()=>{
      res.send('<script type="text/javascript">alert(" 맛있어요 를 눌렀습니다."); window.location="/monthly"</script>');
    });
  });
  router.post('/notdel', function(req, res) {
    model_menu.updateMenu_notdel(req.body.num,()=>{
      res.send('<script type="text/javascript">alert(" 맛없어요 를 눌렀습니다."); window.location="/monthly"</script>');
    });
  });
  router.post('/salty', function(req, res) {
    model_menu.updateMenu_salt(req.body.num,()=>{
      res.send('<script type="text/javascript">alert(" 짜요 를 눌렀습니다."); window.location="/monthly"</script>');
    });
  });
  router.post('/sweet', function(req, res) {
    model_menu.updateMenu_sw(req.body.num,()=>{
      res.send('<script type="text/javascript">alert(" 달아요 를 눌렀습니다."); window.location="/monthly"</script>');
    });
  });

module.exports = router;
