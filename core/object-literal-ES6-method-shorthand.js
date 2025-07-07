/* 02_메소드 단축 */

// ES6에서는 메소드를 정의할 때 function 키워드를 생략한 축약 표현을 사용할 수 있다.
var dog = {
    name : '뽀삐',
    // 기존 : eat : function(food) {console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);}
    // 아래 fuction 키워드 생략
    eat(food) {
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    }
};

dog.eat('고구마');
