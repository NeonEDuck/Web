var express = require('express');
var router = express.Router();

//增加引用函式
const employee = require('./utility/employee');

//接收POST請求
router.post('/', function(req, res, next) {
    var empno = req.body.empno;                  //取得產品編號
    var empname = req.body.empname;              //取得產品名稱
    var title = req.body.title;              //取得產品名稱
    var address = req.body.address;              //取得產品名稱

    // 建立一個新資料物件
    var newData={
        empno:empno,
        empname:empname,
        title:title,
        address:address
    } 
    
    employee.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;