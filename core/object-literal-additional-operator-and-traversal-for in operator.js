// for in 반복문
// 객체의 모든 키 순회
var student = {
    name : '유관순',
    age : 16,
    getInfo : function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// 사용자 지정 설명 + 키와 값 출력
for(var hey in student) {           // "hey" 는 객체의 프로퍼티 키 또는 값을 출력하기 위한 사용자 지정 임시 변수
    console.log(`hey : ${hey}`);    // 사용자 지정 설명(hey :) + 객체의 모든 키 출력
    console.log(`student[hey] : ${student[hey]}`);  // 사용자 지정 설명(student[hey] :) + 객체의 모든 값 출력
}

// 키와 값만 출력
for(var hey in student) {           // "hey" 는 객체의 프로퍼티 키 또는 값을 출력하기 위한 사용자 지정 임시 변수
    console.log(`${hey}`);    // 객체의 모든 키만 출력
    console.log(`${student[hey]}`);  // 객체의 모든 값만 출력
}

// for in 반복문 작동 원리
for(var hey in student) {           // student 변수 내 객체의 모든 키 순회
    console.log(`hey : ${hey}`);    // ${hey} 에는 모든 키 명이 차례대로 들어가고 키 명이 출력됨.
    console.log(`student[hey] : ${student[hey]}`);  // ${student[hey]} 에는 모든 키 명이 차례대로 들어가고 값이 출력됨.
                                                    // ex) console.log(student["age"]) = 해당 키의 값이 출력됨.
}
