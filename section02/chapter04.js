// 1. Spread 연산자
let arrA = [1, 2, 3];
let arrB = [4, 5, ...arrA, 6];

console.log(arrB);

let objA = {
    a: 1,
    b: 2,
}

let objB = {
    ...objA,
    c: 3,
    d: 4,
    e: 5,
}

console.log(objB);

function func(a, b, c) {
    console.log(a, b, c);
}

func(...arrA);

// 2. Rest 매개변수
let arrC = [1, 2, 3, 4, 5];

function func2(a, b, ...rest) {
    console.log(rest);
}

func2(...arrC);