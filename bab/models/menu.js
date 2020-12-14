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

exports.updateMenu_del = function(id, cb){
    function selcet_food(food_id, cb){ // 셀렉트 구문
        connection.query('SELECT * FROM food WHERE food_id = ?',[food_id], function (error, results, fields) {
            if(error){
                console.log(error);
            }else{
                cb(results);
            }
        });
    }
        var food_id = parseInt(id);
        selcet_food(food_id,(results)=>{
                var  del_st= results[0].delicious +1;
                sql = `UPDATE food SET delicious = ? WHERE food_id = ?`;
                var del = parseInt(del_st);
                values = [del, food_id];
                connection.query(sql, values, function(error, results, fields){
                    if(error){
                        console.log('UPDATE ERROR');
                    }else{
                        console.log('업데이트 완료');
                        cb();
                    }
                });
            });
    }

    exports.updateMenu_del_real = function(id, cb){
            var food_id = parseInt(id);
            sql = `UPDATE food SET delicious = ? WHERE food_id = ?`;
            var del = parseInt(del_st);
            values = [del, food_id];
            connection.query(sql, values, function(error, results, fields){
                if(error){
                    console.log('UPDATE ERROR');
                }else{
                    console.log('업데이트 완료');
                    cb();
                }
            });
        }

    exports.updateMenu_notdel = function(id, cb){
        function selcet_food(id_food, cb){ // 셀렉트 구문
            connection.query('SELECT * FROM food WHERE food_id = ?',[id_food], function (error, results, fields) {
                if(error){
                    console.log(error);
                }else{
                    cb(results);
                }
            });
        }
        var id_food = parseInt(id);
        selcet_food(id_food,(results)=>{
            var  notdel_st= results[0].not_delicious +1;
            sql = `UPDATE food SET not_delicious = ? WHERE food_id = ?`;
            var notdel = parseInt(notdel_st);
            values = [notdel, id_food];
            connection.query(sql, values, function(error, results, fields){
                if(error){
                    console.log('UPDATE ERROR');
                }else{
                    console.log('업데이트 완료');
                    cb();
                }
            });
        });
    }
    

    exports.updateMenu_salt = function(id, cb){
        function selcet_food(food_id, cb){ // 셀렉트 구문
            connection.query('SELECT * FROM food WHERE food_id = ?',[food_id], function (error, results, fields) {
                if(error){
                    console.log(error);
                }else{
                    cb(results);
                }
            });
        }
        var food_id = parseInt(id);
        selcet_food(food_id,(results)=>{
                var  salty_st= results[0].salty +1;
                sql = `UPDATE food SET salty = ? WHERE food_id = ?`;
                var salty = parseInt(salty_st);
                values = [salty, food_id];
                connection.query(sql, values, function(error, results, fields){
                    if(error){
                        console.log('UPDATE ERROR');
                    }else{
                        console.log('업데이트 완료');
                        cb();
                    }
                });
            });
        }

        exports.updateMenu_sw = function(id, cb){
            function selcet_food(food_id, cb){ // 셀렉트 구문
                connection.query('SELECT * FROM food WHERE food_id = ?',[food_id], function (error, results, fields) {
                    if(error){
                        console.log(error);
                    }else{
                        cb(results);
                    }
                });
            }
            var food_id = parseInt(id);
            selcet_food(food_id,(results)=>{
                    var  sweet_st= results[0].sweet +1;
                    sql = `UPDATE food SET sweet = ? WHERE food_id = ?`;
                    var sweet = parseInt(sweet_st);
                    values = [sweet, food_id];
                    connection.query(sql, values, function(error, results, fields){
                        if(error){
                            console.log('UPDATE ERROR');
                        }else{
                            console.log('업데이트 완료');
                            cb();
                        }
                    });
                });
            }
        