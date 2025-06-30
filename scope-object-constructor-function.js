/* 01_object 생성자 함수
   new 연산자와 함께 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환
   빈 객체 생성 이후 프로퍼티 또는 메소드를 추가하여 객체를 완성할 수 있다. 
*/

// 빈 객체 생성
const student = new Object();

// 동적으로 프로퍼티 추가   // literal 객체와의 차이점 ?
student.name = '유관순';
student.age = '16';

console.log(student);

// student2.name = '홍길동';
// student2.age = '20';

// console.log(student2);  // 출력 불가 // object 생성자 함수는 하나의 객체만 생성 
