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