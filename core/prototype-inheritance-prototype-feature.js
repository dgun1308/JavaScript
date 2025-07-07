const user = {
    id : 'user',
    login : function() {
        console.log(`${this.id}님 로그인 되었습니다.`);
    }
};

const student = {
    __proto__ : user
};

student.id = 'user01';      // 상속 받은 프로퍼티 값을 추가,변경,삭제 가능(단 해당 객체에 직접 연산 필요)   // 고유 프로퍼티 id 를 가진다.
student.login();


for(let prop in student) {
    console.log(prop);

    let isOwn = student.hasOwnProperty(prop);   // student 의 고유 프로퍼티 확인    // hasOwnProperty : 자기 자신의 프로퍼티 확인 메소드 ?

    if(isOwn) {
        console.log(`객체 자신의 프로퍼티 ${prop}`); // 1. 객체 고유의 프로퍼티 확인 후
    } else {
        console.log(`상속 프로퍼티 ${prop}`);   // 2. 상속 프로퍼티 확인
    }
}
