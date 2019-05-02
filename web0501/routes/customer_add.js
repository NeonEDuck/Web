var express = require('express');
var router = express.Router();

//增加引用函式
const customer = require('./utility/customer');

//接收POST請求
router.post('/', function(req, res, next) {
    var cusno = req.body.cusno;                  //取得產品編號
    var cusname = req.body.cusname;              //取得產品名稱
    var tel = req.body.tel;              //取得產品名稱

    // 建立一個新資料物件
    var newData={
        cusno:cusno,
        cusname:cusname,
        tel:tel
    } 
    
    customer.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;