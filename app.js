//パッケージの読み込み許可
var express = require('express');
var ejs = require("ejs");

//ブラウザ操作用のejsファイルのレダリング
var app = express();
app.engine('ejs',ejs.renderFile);

app.get('/', function(req, res){
    res.render('recognize.ejs',
        {title: 'Samantha OS2'});
});
app.use(express.static('public'));

//ローカルサーバーの起動
var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('This app listening at' + host + ':' + port)
});
