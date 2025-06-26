/* 02_숫자 타입으로 변환 */

// 산술연산자의 피연산자는 모두 숫자여야하므로
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 - '5');
console.log(10 * '5');
console.log(10 / '2');
console.log(10 % 'javascript'); // NaN 반환

// 비교연산자로 크기를 비교하기 위해 모두 숫자여야하므로
// 숫자가 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환한다.
console.log(10 > '5');

// + 단항 연산자 // 
console.log(+'');
console.log(+'1');
console.log(+'javascript');
console.log(typeof (+'javascript'));
console.log(+true);
console.log(+false);
console.log(+null);
console.log(+undefined);
// console.log(+Symbol());
console.log(+{});
console.log(+[]);
console.log(+function(){});

// 빈 문자열, 빈 배열, null, false는 0으로 true는 1로 변환
// 객체와 undefined는 변환되지 않아서 NaN
