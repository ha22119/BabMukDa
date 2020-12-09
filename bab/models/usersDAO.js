var connection = require('./db')

exports.selectUser = function(email, cb){
        var email_string = email;
    connection.query('SELECT * FROM user WHERE email = ?', [email_string], function (error, results, fields) {
        if(error){
            cb(error);
        }else{
            cb(results);
        }
    });
}

exports.insertUser = function(body ,cb){
    console.log('가입하는 코드 실행');
    sql = 'INSERT INTO user (email, pwd, username, isadmin) VALUES(?, ?, ?, ?)';
    values = [body.email, body.pwd, body.username, 0];
    connection.query(sql, values, function(error, results, fields){
        if(error){
            console.log(error);
        }else{
            cb();
        }
    });
}