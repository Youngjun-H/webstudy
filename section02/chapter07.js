// 6가지 요소 조작 메서드

// 1. push -> 변환 후 변경된 배열의 길이값을 반환한다.
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);
// console.log(newLength);
// console.log(arr1);

// 2. pop -> 변환 후 제거된 요소를 반환한다.
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();
// console.log(poppedItem);
// console.log(arr2);

// 3. shift
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
// console.log(shiftedItem);
// console.log(arr3);

// 4. unshift
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
// console.log(newLength2);
// console.log(arr4);

// 되도록 push 와 pop 으로 해겨하자!

// 5. slice
let arr5 = [1, 2, 3, 4, 5];
let sliced1 = arr5.slice(0, 3);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-2);

// console.log(sliced1);
// console.log(sliced2);
// console.log(sliced3);

// 6. concat
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr);