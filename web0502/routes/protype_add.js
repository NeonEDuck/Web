var express = require('express');
var router = express.Router();

//增加引用函式
const protype = require('./utility/protype');

//接收POST請求
router.post('/', function(req, res, next) {
    var typno = req.body.typno;                  //取得產品編號
    var typename = req.body.typename;              //取得產品名稱
    var details = req.body.details;              //取得產品名稱

    // 建立一個新資料物件
    var newData={
        typno:typno,
        typename:typename,
        details:details
    } 
    
    protype.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;