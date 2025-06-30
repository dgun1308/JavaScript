const user = {
    activate : true,
    login : function() {
        console.log('로그인 되었습니다.');
    }
};

const student = {
    passion : true
};

student.__proto__ = user;   // student 는 user 의 프로토타입 이다. 또는 student 는 user 를 상속 받는다.
console.log(student.activate);
student.login();



// 프로토타입 체인
const greedyStudent = {
    class : 11,
    __proto__ : student     // greedyStudent 는 student 의 프로토타입 이다. 또는 greedyStudent 는 student 를 상속 받는다.
};

console.log(greedyStudent.activate);    // user에서 상속
console.log(greedyStudent.passion);     // student에서 상속 // 상속 프로퍼티 = passion

/* 최상단의 user 는 student와 greedyStudent 를 상속받지 않게 해야한다. 프로토타입 체이닝은 순환 참조가 허용되지 않는다. */
