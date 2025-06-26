/* 05_symbol-and-object */

/*
    Symbol 타입
    ES6에서 추가 된 7번째 타입으로, 변경 불가능한 원시 타입의 값이다.
    다른 값과 중복 되지 않는 값으로 이름 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.
*/

// 심볼 값 생성
var key = Symbol('key');
console.log(typeof key);

var hi = Symbol('hi');
console.log(typeof hi);

// 객체 생성
var obj = {};

// 이름이 충돌할 위험이 없게 심볼을 프로퍼티 키로 사용한다. 고유값
obj[key] = 'value';
console.log(obj[key]);

obj[hi] = 'hello';
console.log(obj[hi]);

/*
    자바스크립트의 데이터 타입은 크게 원시 타입과 객체 타입으로 분류한다.
    자바스크립트는 객체 기반의 언어이며, 자바스크립트를 이루고 있는 거의 모든 것이 객체이다.
    number, string, boolean, undefined, null, symbol 6가지 데이터 타입 이외의 값은 모두 객체 타입이다.
 */
