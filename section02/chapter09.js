// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 변환

let arr1 = [
    { name: "홍길동", hobby: "테니스" },
    { name: "김철수", hobby: "테니스" },
    { name: "이영희", hobby: "농구" },
]

const tennisPeople = arr1.filter((item) => { if (item.hobby === "테니스") return true; });

// console.log(tennisPeople);

const tennisPeople2 = arr1.filter((item) => item.hobby === "테니스"); // 이 함수 형태 기억해 둘 것!

// console.log(tennisPeople2);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => { return item * 2; });
console.log(mapResult1);

let names = arr1.map((item) => { return item.name; });
console.log(names);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = [10, 1, 3, 5, 2];
arr3.sort((a, b) => {
    if (a < b) { return 1; }
    else if (a > b) { return -1; }
    else { return 0; }

})

// console.log(arr3);

// 4. toSorted
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

//  5. join
//  배열의 모든 요소를 하나의 문자로 합쳐서 반환하는 메서드
let arr6 = ["hello", "world", "javascript"];
const joined = arr6.join(" ");
console.log(joined);