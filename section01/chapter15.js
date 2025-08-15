let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴(대부분 사용)

// 객체 프로퍼티
let person = {
    name: "홍길동",
    age: 20,
    gender: "남자",
    "1": "2",
    "like cat": true,
}

// 3. 객체 프로퍼티를 다루는 방법
// 3-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"];
console.log(age);

let property = "gender";
console.log(person[property]);

// 3-2. 프로퍼티 추가
person.job = "developer";

// 3-3. 프로퍼티 수정
person.age = 30;
console.log(person);

// 3-4. 프로퍼티 삭제
delete person.job;
console.log(person);

// 3-5. 프로퍼티 존재 확인
result1 = "name" in person;
console.log(result1);
result2 = "cat" in person;
console.log(result2);