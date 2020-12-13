var express = require('express');
var model_menu = require('../models/menu');
var router = express.Router();

router.post('/', function(req, res) {
  model_menu.selectmenu_something(req.body.num,(results)=>{
      console.log(results);
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
    model_menu.selectmenu_something(req.body.num,(results)=>{
        console.log(results);
      res.render('menu_eval', {
        list : results,
        title: 'Express',
        isLogin: req.session.isLogin, 
        userEmail: req.session.userEmail,
        isAdmin : req.session.isAdmin
       });
    })
  });
  router.post('/sweet', function(req, res) {
    model_menu.selectmenu_something(req.body.num,(results)=>{
        console.log(results);
      res.render('menu_eval', {
        list : results,
        title: 'Express',
        isLogin: req.session.isLogin, 
        userEmail: req.session.userEmail,
        isAdmin : req.session.isAdmin
       });
    })
  });
  router.post('/salty', function(req, res) {
    model_menu.selectmenu_something(req.body.num,(results)=>{
        console.log(results);
      res.render('menu_eval', {
        list : results,
        title: 'Express',
        isLogin: req.session.isLogin, 
        userEmail: req.session.userEmail,
        isAdmin : req.session.isAdmin
       });
    })
  });
  router.post('/not_delicious', function(req, res) {
    model_menu.selectmenu_something(req.body.num,(results)=>{
        console.log(results);
    })
  });
module.exports = router;
