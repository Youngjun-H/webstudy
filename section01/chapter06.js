// 1. 묵시적 형변환
let num = 10;
let str = "20";

console.log(num + str);

// 2. 명시적 형변환
// 2-1. Number() 문자형 -> 숫자형
let num2 = 10;
let str2 = "20";

console.log(num2 + Number(str2));

let str3 = "10개";
console.log(parseInt(str3));

// 숫자형 -> 문자형
let num4 = 10;
let num2str = String(num4);
console.log(num2str);