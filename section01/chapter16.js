// 1.상수 객체
const person = {
    name: "홍길동",
    age: 20,
    gender: "남자",
}

// 상수 객체도 프로퍼티를 수정 등등 할 수 있다.
person.name = "김길동";
console.log(person);

// 2. 메서드

const animal = {
    name: "nabi",
    age: 2,
    eat: function () {
        console.log("먹는다.");
    },
    bark: () => {
        console.log("야옹~");
    },
    sleep() {
        console.log("잔다.");
    }
}

animal.eat();
animal.bark();
animal['bark']();
animal.sleep();