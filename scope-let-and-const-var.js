/* 01_var
   ES5까지 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것 이었는데,
   이는 아래와 같은 몇 가지 문제를 야기한다. 
*/

// 1. 변수 중복 선언 허용
var message = '안녕하세요';
console.log(message);

// var 키워드로 선언 된 변수는 같은 스코프 내에서 중복 선언이 허용된다.
// 초기화 문이 있는 변수 선언문은 자바스크립트 엔진에 의해 초기화 된다. var 키워드가 없는 것 처럼 동작한다.
var message = '안녕히가세요';   // '안녕히가세요' 초기화 문
console.log(message);

// 초기화 문이 없는 변수 선언문은 무시된다.
var message;            // 초기화 문 없음.
console.log(message);   // '안녕히가세요' 출력 -> undefined 출력  // **

// 2. 함수 레벨 스코프
// 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다.
var i = 0;
for(var i = 0; i < 10; i++) {}
console.log(i);

// 3. 함수 호이스팅
// var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어올려진 것 처럼 동작한다.
// 즉, 변수 선언문 이전에 참조할 수 있다.
// 실행 시 오류가 발생하지는 않지만 이는 프로그램의 흐름에 맞지 않고, 가독성을 떨어뜨리며 오류를 만들 여지가 있다.
console.log(test);  // undefined 출력 (아래 var 선언문 호이스팅) ?
var test = '반갑습니다';
console.log(test);  // '반갑습니다' 출력

// 위 var test 문 권장 코드 ?
var test1;
console.log(test1); // undefined 출력
test1 = '반갑습니다';
console.log(test1); // '반갑습니다' 출력
