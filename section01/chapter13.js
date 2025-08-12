// 1. 콜백함수 -> 콜백: 뒤에 실행되는 함수

function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub() {
    console.log("I am sub");
}

main(sub);

main(function () {
    console.log("I am second sub");
});

main(() => {
    console.log("함수표현식");
})

//  2. 콜백함수 활용
function repeat(count, callback) {
    for (let idx = 1; idx < count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => { console.log(idx * 2) });
repeat(5, (idx) => { console.log(idx * 3) });