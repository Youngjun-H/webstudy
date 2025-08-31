// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
let arr1 = [1, 2, 3, 4, 5];

arr1.forEach(function (item, idx, arr) {
    // console.log(item, idx, arr);
});

doubledArr = [];
arr1.forEach((item) => {
    doubledArr.push(item * 2);
});
// console.log(doubledArr);

// 2. includes
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(7);
// console.log(isInclude);

// 3. indexOf
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
// console.log(index);

// 4. findIndex
let arr4 = [1, 2, 3, 4, 5];
const findIndex = arr4.findIndex((item) => {
    if (item === 3) return true;
});
const findIndex2 = arr4.findIndex((item) => item % 2 !== 0);
// console.log(findIndex2);

// findIndex 를 사용하는 이유 -> 객체 리스트 일 때
let arrObjects = [
    { name: '홍길동' },
    { name: '이순신' }
]

// console.log(arrObjects.indexOf({ name: '이순신' }))
// console.log(arrObjects.findIndex((item) => item.name === "이순신"));

// 5.find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환.
const findedItem = arrObjects.find((item) => item.name === '이순신');
console.log(findedItem);