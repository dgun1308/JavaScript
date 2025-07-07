/* 02_배열의 길이 프로퍼티 */

// length 프로퍼티는 요소의 개수를 나타내는 0 이상의 정수를 값으로 갖는다.
console.log([].length);
const arr = [1,2,3,4,5];
console.log(arr.length);

// length 프로퍼티 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.
arr.push(6);    // push : 인자로 전달한 요소 추가하는 메소드
console.log(arr.length);    // 배열의 모든 요소 나열하여 출력
console.log(arr);

arr.pop();      // pop : 마지막 요소 제거 메소드
console.log(arr.length);
console.log(arr);    // 배열의 모든 요소 나열하여 출력

// length 프로퍼티에 임의의 숫자 값을 명시적으로 할당할 수도 있다.
// 현재 length 프로퍼티보다 작은 숫자 값을 할당하면 배열의 길이가 줄어든다.
arr.length = 3;     // 배열의 길이 3으로 조절
console.log(arr);   // 1,2,3 출력

// 현재 length 프로퍼티보다 큰 숫자 값을 할당하면 지정요소 배열 외 나머지는 빈 배열으로 생성된다.
arr.length = 10;    // 배열의 길이 10으로 조절
console.log(arr);   // 1,2,3, 7개의 빈 배열 출력
console.log(arr.length);

// 희소 배열
// 자바스크립트는 배열의 요소가 연속적으로 위치하지 않고 일부가 비어있는 희소 배열을 문법적으로 허용한다.
const sparse = [, 2, , 4];
console.log(sparse);    // 빈배열,2,빈배열,4 출력
console.log(sparse.length);
