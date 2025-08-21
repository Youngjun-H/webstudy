// 1. Date 객체를 생성하는 방법
let date1 = new Date();

// console.log(date1);

let date2 = new Date("2025-08-19");
// console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초" 부터 흐른 시간을 밀리초 단위로 표현한 값
let ts1 = date1.getTime();
// console.log(ts1);

let date4 = new Date(ts1)

// console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let day = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

// console.log(
//     year,
//     month,
//     day,
//     hour,
//     minute,
//     seconds
// )

// 4. 시간 수정하기
// date1.setFullYear(2023);
// date1.setMonth(2);
// date1.setDate(10);
// date1.setHours(12);
// date1.setMinutes(12);
// date1.setSeconds(17);

// console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());