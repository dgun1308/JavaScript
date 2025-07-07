/* 03_const
   const 키워드 상수를 선언하기 위해 사용한다.
   let 키워드와 마찬가지로 블록 레벨 스코프를 가지며 변수 호이스팅이 발생하지 않는 것 처럼 동작한다.
   아래에서는 let 키워드와 다른 점을 중심으로 살펴본다. 
*/

// const x;     // 선언만 하는 것 불가
// const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화 해야한다.
const x = 1;    // 선언과 동시에 초기화

// const 키워드로 선언한 변수는 재할당 불가능
// x = 2;
// console.log(x);  // 에러 발생

/*
    상수 : 재할당이 금지 된 변수
    const 키워드로 선언된 변수에 원시 값을 할당하면 원시 값은 변경 할 수 없는 값이고,
    const 키워드에 의해 재할당이 금지되므로 할당 된 값을 변경할 수 있는 방법은 없다.
    일반적으로 상수의 이름은 대문자로 선언해 상수임을 명확히 나타내며,
    여러 단어로 이러우진 경우 언더스코어(_)로 구분하여 스네이크 케이스로 표현
*/

const DISCOUNT_RATE = 0.15;
// 고정값 예시 : 정가(할인율)
let price = 15000;
// 변동값 예시 : 할인가
let discountPrice = price * (1 - DISCOUNT_RATE);        // discountPrice 대소문자 혼합 방식 확인 ?
console.log(discountPrice);


// const 키워드로 선언 된 변수에 객체를 할당한 경우 객체 내의 프로퍼티 키 및 값을 변경할 수 있다.
const student = {
    name : '홍길동',
    age : 20
}

student.name = '유관순';
console.log(student);

// 객체 자체에 재할당은 불가능
// student = {};    // 에러 발생
