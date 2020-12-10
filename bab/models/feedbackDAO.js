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

exports.selectFeedback_something = function(feedback_id, cb){
    connection.query('SELECT * FROM feedback WHERE feedback_id = ?',[feedback_id], function (error, results, fields) {
        if(error){
            console.log(error);
        }else{
            cb(results);
        }
    });
}

exports.insertFeedback = function(body,user_id, cb){
    sql = 'INSERT INTO feedback (title,contents,user_id), actor) VALUES(?,?,?)';
    values = [body.title, body.contents, user_id];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log(error);
        }else{
            cb();
        }
    })
}

exports.updateFeedback = function(id, body, cb){
    sql = `UPDATE feedback SET agree = ? WHERE id = ?`;
    values = [body.agree, id];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log('UPDATE ERROR');
        }else{
            cb();
        }
    })
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