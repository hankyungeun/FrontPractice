function alertHi(){
    alert('안녕하세요');
}

function consoleLog(){
    console.log("콘솔창에 출력");
}

function question(){
    /*
        confirm(질문창)
        window.confirm
    */
    let isSaved = confirm("질문내용을 저장하시겠습니까?");
    if(isSaved ? alert("저장되었습니다.") : alert("취소되었습니다."));
}

function question2(){
    /*
        prompt(질문창)
        window.prompt
        리턴값 : 입력 내용
    */
    let value = prompt("오늘 점심 메뉴는?");
    console.log(value);
//   if(isSaved ? alert("저장되었습니다.") : alert("취소되었습니다."));
// if문 작동하는 이유 -> prompt() 함수는 사용자가 입력한 값을 반환하거나, 취소 버튼을 눌렀을 때 null을 반환
// 값이 있냐/없냐로 true false구분하기 때문에 작동함


   // 문서 내에 html형식으로 값을 출력하는 함수 : innerHtml, innerText
   // alert아이디 속성을 가진 요소에 사용자가 입력한 데이터를 출력
   // 오늘 value를 먹었습니다.
   // +) value => 글자색을 다르게 표시
   
   /*
    1) area1 아이디 속성을 가진 요소에 접근(.getElementById)
    2) 변수명.innerHTML 또는 변수명.innerText = ".....";

*/
    let gethtml = document.getElementById("area1")
//    gethtml.innerHTML = value;
    //gethtml.innerHTML = "오늘 <span style='color:red;'>" +  value + "</span>를 먹었습니다.";
    gethtml.innerText = "오늘" +  value + "를 먹었습니다.";
   //value.style.color = "red";

}

function loginTest(){
    let userId = document.getElementById("userId");
    let isValue = userId.value;
    let userPw = document.getElementById("userPw");
    let pwValue = userPw.value;
    console.log(userId);
    console.log(isValue);
    console.log(userPw);
    console.log(pwValue);

    let result = document.getElementById("userInfo");
    result.value = isValue + "/" + pwValue;

    userId.value = '';
    userPw.value = '';
}