function start(e){
    // alert('ID : '+e.getAttribute('id'));
      alert('함수 작동');
      var children = e.childNodes;
      var childData = [];
      for(var i=0; i<children.length; i++){
        if(i === 1 || i === 3 || i === 5 || i === 7){
          alert(i+':'+children[i].innerText);
          childData.push(children[i].innerText);
        }
      }

      document.write('<form action="/feedback" id="smb_form" method="post"><input type="hidden" id="childData" name="childData" value="'+ childData +'"></form>');
      document.getElementById("smb_form").submit();

      // 배열에 들어갔는지 확인
      // for(var i=0; i<childData.length; i++){
      //   alert(childData[i]);
      // }
    }