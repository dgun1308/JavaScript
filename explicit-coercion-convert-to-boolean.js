/* 03_불리언(논리)타입으로 변환 */

// 1. Boolean 생성자 함수
console.log(Boolean('javascript'));
console.log(Boolean(''));
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(Infinity));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean([]));

// 2. ! 부정 논리 연산자를 두 번 사용하는 방법
// ! 연산자를 1번 쓰면 불리언 값으로 변환하고,
// !! 연산자를 2번 쓰면 그 값을 반전시킨다.
console.log(!!'javascript');
