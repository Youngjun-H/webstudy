//  1. 함수 표현식 -> 함수를 변수에 담을 수 있다. 호이스팅 적용 안됨
function funcA(){
    console.log("함수 실행됨!");
}

let varA = funcA;

console.log(varA);
varA();


let varB = function (){
    console.log("이렇게도 함수가 실행됨!");
}

varB();

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value+1;
}
console.log(varC(2));

let varD = () => 1;
console.log(varD());