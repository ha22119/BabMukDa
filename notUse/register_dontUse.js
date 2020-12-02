$(function(){
    $('.signUp_box').submit(function(e){
        e.preventDefault();

        var email = $('#email').val();

        if(!validateEmail(email)){
            $('#email').next().html('잘못된 형식입니다').show();
            return;
        }
    })
});

var password = $('#pwd').val();
if(!validatePassword(password)){
    $('#pwd').next().html('최소 6자 이상의 문자열이여야 합니다.').show();
    return;
}

var pwdCheck = $('#pwd_check').val();
if(password !== pwdCheck){
    $('#pwd_check').next().html('비밀번호가 일치하지 않습니다.').show();
    return;
}
var student_num = $('#num_name').val();

function validateEmail(email) {

	var re = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (re==="") {
        return false;
    }
	return re.test(email); // 형식에 맞는 경우 true 리턴	

}
function validatePassword(password){
    var re = /^(?=.{8,})(?=.*\d)(?=.*[A-Z])(?!.*\s).*$/;
    if (re.length < 6) {
        return false;
    }
    return re.test(password);
}

function submit(email,password){
    var params = {
        email:email,
        password:password,
        student_num:student_num
    };
}