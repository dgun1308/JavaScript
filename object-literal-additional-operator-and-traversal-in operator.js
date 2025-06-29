// in 연산자 - 프로퍼티 존재 여부 확인하기
var student = {
    name : '유관순',
    age : 16,
    test : undefined
};

// undefined 사용하여 student 변수 내 프로퍼티 키 존재 여부 확인
console.log(student.name === undefined);    // false(존재) 출력
console.log(student.height === undefined);  // true(부재) 출력
console.log(student.test === undefined);    // true(부재) - 프로퍼티 키가 존재하나 존재하지 않음 으로 판별되는 문제

// in 연산자 사용하여 student 변수 내 프로퍼티 키 존재 여부 확인
console.log("name" in student); // true(존재) 출력
console.log("height" in student);   // false(부재) 출력
console.log("test" in student); // true(존재) 출력
