var connection = require('./db')

exports.selectFeedback = function(cb){
    connection.query('SELECT feedback.feedback_id, feedback.title, feedback.agree, user.username FROM feedback left outer join user on feedback.user_id = user.email', function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}
exports.selectFeedback_noAnswer = function(cb){
    // connection.query('SELECT * FROM feedback where feedback_id not IN(SELECT feedback_id FROM feedback where isanswer=1)', function (error, results, fields) {
        connection.query('SELECT feedback.feedback_id, feedback.title, feedback.agree, user.username FROM feedback left outer join user on feedback.user_id = user.email where isanswer = 0', function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}

exports.selectFeedback_mine = function(userEmail,cb){ // 유저 email 검색해서 작성자가 같으면 피드백 불러오기
    connection.query('SELECT feedback.feedback_id, feedback.title, feedback.agree, feedback.user_id, FROM feedback where user_id in (SELECT email from user where user_id=?)',[userEmail], function (error, results, fields) {
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
    values = [1,answer ,feedback_id];
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