/* 동적 타입 언어 */

var test;
console.log(test);

test = 1;
console.log(typeof test);

test = 'javascript';
console.log(typeof test);

test = true;
console.log(typeof test);

test = null;
console.log(typeof test);

test = Symbol();
console.log(typeof test);

test = {};
console.log(typeof test);

test = [];
console.log(typeof test);

test = function(){};
console.log(typeof test);
