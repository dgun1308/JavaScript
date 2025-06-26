/* 03_불리언(논리) 타입으로 변환 */

// Truthy -> true, Falsy -> false로 암묵적 타입 변환 된다.
if(true) console.log("if(true)");
if(false) console.log("if(false)");
if(undefined) console.log("if(undefined)");
if(null) console.log("if(null)");
if(0) console.log("if(0)");
if(NaN) console.log("if(NaN)");
if('') console.log("if('')");
if('javascript') console.log("if('javascript')");

// false, undefiend, null, 0, NaN, ''(빈 문자열)은 Falsy 값이며
// 이 외의 모든 값은 Truthy 값이다.

if(10>11) console.log("if(10>11)"); // Falsy -> false로 변환되어 값 미출력
if(10>9) console.log("if(10>9)"); // Truthy -> true로 변환되어 값 출력
if(10>11 == false) console.log("if(10>11)"); // Truthy -> true로 변환되어 값 출력
