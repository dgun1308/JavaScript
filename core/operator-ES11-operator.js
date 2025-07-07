/* 에러 코드 순화 문법 */

/* 01_옵셔널 체이닝 연산자 */
var obj = null;
var val = obj?.value;
console.log(val);

/* 02_null 병합 연산자 */
var test = null ?? '기본 값';
console.log(test);
