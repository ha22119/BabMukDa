var express = require('express');
var model_menu = require('../models/menu');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('<script type="text/javascript"> var win = window.open("http://gsm.gen.hs.kr/xboard/board.php?tbnum=8", "_blank"); window.location="/main"</script>');
  //   model_menu.selectmenu_month('2020-12-09',(results)=>{
  //   res.render('monthly', {
  //     list : results,
  //     title: 'Express',
  //     isLogin: req.session.isLogin, 
  //     userEmail: req.session.userEmail,
  //     isAdmin : req.session.isAdmin
  //    });
  // })
});

module.exports = router;
