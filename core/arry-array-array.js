/* 01_배열 : 여러 개의 값을 순차적으로 나열한 자료구조이다. */


// 1. 배열 리터럴을 통해 배열 생성
const arr = ['바나나', '복숭아', '키위'];
console.log(arr);
console.table(arr);     // index 0:바나나 , 1:복숭아 , 2:키위 출력

// 2. 배열 생성자 함수
const arr2 = new Array();
console.log(arr2);

// 전달된 인수가 1개이고 숫자인 경우 length 프로퍼티 값이 인수인 배열을 생성
const arr3 = new Array(10); // 10개의 빈 배열 생성
console.log(arr3);

// 전달된 인수가 2개 이상
const arr4 = new Array(1, 2, 3);    // 3개의 요소를 가진 배열 생성
console.log(arr4);

// 3. Array.of 메소드
console.log(Array.of(10));  // 숫자 10 요소를 가진 배열
console.log(Array.of(1, 2, 3));
console.log(Array.of('hello', 'js'));   // 문자열 요소 배열
console.log(Array.of(1, 'hello', {}, function() {}));   // 다양한 타입의 요소 배열

// 배열의 요소는 자신의 위치를 나타내는 인덱스를 가지며 배열의 요소에 접근할 때 사용된다.
console.log(arr[1]);    // 배열의 인덱스 값 출력 ?

// 배열의 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티
console.log(arr.length);    // 배열의 길이(요소의 개수) 출력 : length   // 3 출력됨

for(let i = 0; i < arr.length; i++) {   // 작동 원리 확인 ?
    console.log(arr[i]);
};

// 배열이라는 별도의 타입은 존재하지 않는다. 배열은 객체 타입이다.
console.log(typeof arr);    // object 출력
