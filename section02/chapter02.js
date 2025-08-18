// 단락 평가(short-circuit evaluation)
function returnFalse() {
    console.log("False");
    return false;
}

function returnTrue() {
    console.log("True");
    return true;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());
console.log(returnTrue() || returnFalse());
console.log(returnFalse() || returnTrue());

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "이름 프라퍼티가 없습니다.")
}

printName();
printName({ name: "홍길동" });
