//  음식을 주문하는 상황

function orderFood(callback){
    setTimeout(() => {
        const food = "치킨";
        callback(food);
    }, 3000);
}

// orderFood((food) => {console.log(food);});


function cooldownFood(food, callback){
    setTimeout(() => {
        const coodownedFood = `식은 ${food} 입니다.`;
        callback(coodownedFood);
    }, 2000);
}

function freezeFood(food, callback){
    setTimeout(() => {
        const frozenFood = `얼어버린 ${food} 입니다.`;
        callback(frozenFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (coodownedFood) => {
        console.log(coodownedFood);

        freezeFood(coodownedFood, (frozenFood) => {
            console.log(frozenFood);
        });
    });
});
