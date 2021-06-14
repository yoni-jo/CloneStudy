"use strict"
let target = document.querySelector("strong")
let i=0;
//커서 깜빡이게 하기
function blink() {
    target.classList.toggle('active');
}
setInterval(blink, 300)

//변수 값 저장
function randomString() {
    let stringArr = ["Kerri Deo.", "A WebPublisher.", "A Graphic Designer."]
    let selectString = stringArr[i]
    let selectStringArr = selectString.split(''); // ex("H","A","P","P","Y")
    i++
    if(i>=stringArr.length){
        i=0
    }
    return selectStringArr;
    
}


//타이핑 리셋
function resetTyping() {
    target.textContent = "";
 
    dynamic(randomString())

}

//글자 하나씩 택스트 출력
function dynamic(randomArr) {
    if (randomArr.length > 0) { // ex["H","A","P","P","Y"] =>5번 반복해서 실행
        target.textContent += randomArr.shift() //strong태그안에 
                                                //.shift()의해 첫글자 제거후 제거한 글자 하나씩 반환
        setTimeout(function () { //["H","A","P","P","Y"]에서 "H"가 제거되면서 randomArr개수 5개가되어 
            dynamic(randomArr) //위 if조건에서 0보다 크므로 ["A","P","P","Y"]부터 반복되어짐
        }, 120)
       
    } else {
        setTimeout(resetTyping,1200)//["H","A","P","P","Y"]에 모든 걸 반환해서 아무것도 없어질때 
                                    //resetTyping함수가 3초뒤에 실행
    }
   

}
dynamic(randomString())