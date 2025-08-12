//  조건문
// let num=7;

// if (num>=10){
//     console.log("num은 10보다 크거나 같다.");
//     console.log("참입니다!");
// }
// else if (num>=5){
//     console.log("num은 5보다 크거나 같다.");
//     console.log("중간입니다!");
// }
// else{
//     console.log("num은 10보다 작다.");
//     console.log("거짓입니다!");
// }

// switch case 문
let animal = "cat";

switch (animal){
    case "dog":
        console.log("강아지입니다.");
        break;
    case "cat":
        console.log("고양이입니다.");
        break;
    case "bird":
        console.log("새입니다.");
        break;
    case "fish":
        console.log("물고기입니다.");
        break;
    case "snake":
        console.log("뱀입니다.");
        break;
    default:
        console.log("동물이 아닙니다.");
        break;
}