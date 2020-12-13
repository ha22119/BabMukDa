var connection = require('./db')

exports.selectmenu = function(date,cb){
    connection.query('SELECT * FROM food where date=?',[date], function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}

exports.selectmenu_month = function(date,cb){
    var month = String(date).substr(0,7);
    console.log(month);
    connection.query('SELECT * FROM food where date LIKE ?',[month+'%'], function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}

exports.selectmenu_something = function(num,cb){
    var food_id = parseInt(num);
    connection.query('SELECT * FROM food where food_id=?',[food_id], function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}

// exports.updateFeedback_agree = function(id, cb){
//     function selcet(feedback_id, cb){ // 셀렉트 구문
//         connection.query('SELECT * FROM feedback WHERE feedback_id = ?',[feedback_id], function (error, results, fields) {
//             if(error){
//                 console.log(error);
//             }else{
//                 cb(results);
//             }
//         });
//     }