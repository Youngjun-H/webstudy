// 배열 순회

let arrA = [1, 2, 3, 4, 5];

for (let i = 0; i < arrA.length; i++) {
    console.log(arrA[i]);
}

console.log("--------------------------------");

// for of 배열 순회

for (let item of arrA) {
    console.log(item);
}

console.log("--------------------------------");

let person = {
    name: "홍길동",
    age: 20,
    gender: "남",
    hobby: "테니스",
};

let keys = Object.keys(person);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], person[keys[i]]);
}

console.log("--------------------------------");

for (let key in person) {
    console.log(key, person[key]);
}

console.log("--------------------------------");

let values = Object.values(person);

console.log(values);

console.log("--------------------------------");

// for in 객체 순회

for (let key in person) {
    console.log(key);
}