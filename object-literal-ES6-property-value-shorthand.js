/* 01_프로퍼티 값 단축 구문 */
var id = 'p-001';
var price = 30000;

var product = {
    id : id,
    price : price
};

console.log(product);

// ES6에서는 프로퍼티 값으로 변수를 사용하는 경우
// 변수 이름과 프로퍼티 키가 동일한 이름일 때 프로퍼티 키를 생략할 수 있다.
// 프로퍼티 키는 변수 이름으로 자동 생성 된다.
// 정리 : 변수 이름 = 프로퍼티 키 = 프로퍼티 값 : 프로퍼티 키 생략 가능
var product2 = {id, price};
console.log(product2);
