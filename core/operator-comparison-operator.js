/* 01_비교 연산자 */

/* 
    동등/일치 비교 연산자
    동등 비교(==, !=) 연산자는 먼저 암묵적 타입 변환을 통해 타입을 일치시킨 후 같은 값인지 비교한다.
    일치 비교(===, !==) 연산자는 타입과 값이 모두 일치하는지 비교한다.
*/

// 숫자 1, 문자 '1', true 비교
console.log(`1 == 1 : ${1 == '1'}`);
console.log(`1 == true : ${1 == true}`);

console.log(`1 === 1 : ${1 === '1'}`);
console.log(`1 === true : ${1 === true}`);

// 숫자 0, 문자 '0', 빈 문자열 '', false 비교
console.log(`0 == '0' : ${0 == '0'}`);
console.log(`0 == '' : ${0 == ''}`);
console.log(`0 == false : ${0 == false}`);

console.log(`0 === '0' : ${0 === '0'}`);
console.log(`0 === '' : ${0 === ''}`);
console.log(`0 === false : ${0 === false}`);

// null, undefiend 비교
console.log(`null == undefined : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);

// NaN은 자신과 일치하지 않는 유일한 값이다.
console.log(`NaN == NaN : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);

// 빌트인 함수 Number.isNaN()을 사용해서 확인해야 한다.
console.log(`Number.isNaN(NaN) : ${Number.isNaN(NaN)}`);

/* 비교 연산자를 통해 문자열끼리 비교도 가능하며 유니코드 순으로 비교한다. */
console.log(`'hello' === 'hello' : ${'hello' === 'hello'}`);
console.log(`'hello' !== 'hello' : ${'hello' !== 'hello'}`);

console.log(`'apple' < 'banana' : ${'apple' < 'banana'}`);
console.log(`'apple' > 'banana' : ${'apple' > 'banana'}`);
console.log(`'cat' >= 'Zoo' : ${'cat' >= 'Zoo'}`);  // 대문자가 소문자보다 작다 // test필요(유니코드 비교)
