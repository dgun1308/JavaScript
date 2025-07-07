const user = {
    activate : true,
    login : function() {
        console.log('로그인 되었습니다.');
    }
};

function Student(name) {
    this.name = name;
};

student.__proto__ = user;   // undefined 출력 -> 해결 방법 : 11열에 const student = new Student("홍길동") 선언 필요
// Student.prototype = user;   // 생성자 함수의 상속 받는 구문

const student = new Student("홍길동");
console.log(student.activate);
console.log(student.name);
