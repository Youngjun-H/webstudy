// function greeting(){
//     console.log("안녕하세요!");
// }

// greeting();

function get_area(width, height){
    function another(){
        console.log("another");
    }
    another();

    let area = width * height;

    return area;
}

console.log(get_area(10, 20));
console.log(get_area(100, 200));