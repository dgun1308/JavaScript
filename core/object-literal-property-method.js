/* 02_method 
    자바스크립트의 함수는 객체이다.
    함수는 값으로 취급할 수도 있고, 프로퍼티 값으로 사용할 수 있다.
*/
var dog = {
    name : '뽀삐',
    eat : function(food) {
        // 내부 프로퍼티 접근할 때 this를 붙여야한다. + function 이름 지정
        console.log(`${this.name}(은)는 ${food}를 맛있게 먹어요`);
    }
};

dog.eat('고구마');  // eat : function 매개변수(food)의 전달인자, 함수 출력문
console.log(dog.name);  // name 출력문
