var connection = require('./db')

exports.selectFeedback = function(cb){
    connection.query('SELECT * FROM feedback', function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}
exports.selectFeedback_noAnswer = function(cb){
    connection.query('SELECT * FROM feedback where isanswer = 0', function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}

exports.selectFeedback_something = function(feedback_id, cb){
    connection.query('SELECT * FROM feedback WHERE feedback_id = ?',[feedback_id], function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}

exports.insertFeedback = function(body,user_id,cb){
    sql = 'INSERT INTO feedback (title, contents, user_id, agree, isanswer) VALUES(?,?,?,?,?)';
    values = [body.title, body.contents, user_id,0,0];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log(error);
        }else{
            cb();
        }
    })
}

exports.updateFeedback_agree = function(id, cb){
    function selcet(feedback_id, cb){ // 셀렉트 구문
        connection.query('SELECT * FROM feedback WHERE feedback_id = ?',[feedback_id], function (error, results, fields) {
            if(error){
                console.log(error);
            }else{
                cb(results);
            }
        });
    }

    var feedback_id = parseInt(id);
    selcet(feedback_id,(results)=>{
            var agree_st = results[0].agree +1;
            sql = `UPDATE feedback SET agree = ? WHERE feedback_id = ?`;
            var agree = parseInt(agree_st);
            var id = parseInt(feedback_id);
            values = [agree, feedback_id];
            connection.query(sql, values, function(error, results, fields){
                if(error){
                    console.log('UPDATE ERROR');
                }else{
                    console.log('업데이트 완료');
                }
            });
            connection.query('SELECT * FROM feedback WHERE feedback_id = ?',[feedback_id], function (error, results, fields) {
                if(error){
                    console.log(error);
                }else{
                    cb(results);
                }
            });
        });
}

exports.updateFeedback_answer = function(num, answer, cb){
    sql = `UPDATE feedback SET isanswer = ?, answer = ? WHERE feedback_id = ?`;
    var feedback_id = parseInt(num);
    console.log(typeof(feedback_id));
    console.log(answer);
    values = [1,answer ,feedback_id];
    console.log(values);
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log('UPDATE ERROR');
        }else{
            console.log('업데이트 완료');
            cb();
            }
        });
}



exports.deleteFeedback = function(id, cb){
    sql = `DELETE FROM feedback WHERE id = ${id}`;
    connection.query(sql, function(error, results, fields){
        if(error){
            console.log('DELETE ERROR');
        }else{
            cb();
        }
    })
}