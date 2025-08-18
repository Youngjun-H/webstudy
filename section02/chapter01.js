// 1. Falsy 한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f7) {
    console.log(f7)
    console.log("falsy 한 값입니다.");
}

// 2. Truthy 한 값
// Falsy 한 7가지 값이 아닌 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => { };

if (t5) {
    console.log(f7)
    console.log("truthy 한 값입니다.");
}

// 활용 사례 

function printName(person) {
    if (!person) {
        console.log("person 의 이름 값이 없습니다.");
        return;
    }
    console.log(person.name);
}

person = { "name": "홍길동" }
printName(person);
printName(null);
