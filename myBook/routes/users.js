var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //send : 파라미터에 문자열이 출력
  res.send('respond with a resource');
});

router.get('/join', function(req, res, next) {
  //render : 장바구니 화면을 출력할
  res.render('index',{title:'회원가입', pageName: 'users/join.ejs'});
});

router.get('/cart', function(req, res, next) {
  //render : 장바구니 화면을 출력할
  res.render('index',{title:'장바구니', pageName: 'users/cart.ejs'});
});

router.get('/mypage', function(req, res, next) {
  //render : 장바구니 화면을 출력할
  res.render('index',{title:'장바구니', pageName: 'users/mypage.ejs'});
});

module.exports = router;
