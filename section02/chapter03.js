// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

let [one, two, three] = arr;
console.log(one, two, three);

let [a, b, c, d] = arr;
console.log(a, b, c, d);

// 2. 객체의 구조 분해 할당

let obj = { name: "홍길동", age: 20, hobby: "테니스" };

let { age, name, hobby } = obj;
console.log(name, age, hobby);

// 3. 객체 구조분해 할당해서 함수의 매개변수를 받는 방법

const func = ({ name, age, hobby, gender }) => {
    console.log(name, age, hobby, gender);
}


func(obj);