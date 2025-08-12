//  null 병합 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;
let var7 = var3 ?? var2;

console.log(var4);
console.log(var5);
console.log(var6);
console.log(var7);

// null 병합 연산자 사용법
let username = "Name";
let nickname = "job";

let displayname = username ?? nickname;

console.log(displayname);


// typeof 연산자
let num = 10;
console.log(typeof num);

// 삼항 연산자
let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);