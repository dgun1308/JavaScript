/* 02_생성자 함수 */

// 객체 리터럴에 의한 객체 생성
const student1 = {
    age : '유관순',
    name : '16',
    getInfo : function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

const student2 = {
    age : '홍길동',
    name : '20',
    getInfo : function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// 생성자 함수에 의한 객체 생성
// 객체를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여
// 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
function Student(name, age) {       // 생성자 함수 사용시 함수 이름 첫 글자는 대문자 필수

    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.name = name;
    this.age = age;
    this.getInfo = function() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

const student3 = new Student('장보고', 30);     // 생성자 함수를 사용할 변수 할당 시 new 연산자 사용    // const 는 상수 선언에만 사용?
const student4 = new Student('신사임당', 40);

console.log(student3.getInfo());
console.log(student4.getInfo());
console.log(student3);
console.log(student2);


// object 생성자 함수와의 차이점
// 생성자 함수 : 객체의 프로퍼티 키와 값의 반환 값을 함수로 지정 후, 외부에서 변수와 객체의 프로퍼티 값을 할당한다. (프로퍼티 키명은 함수 내부에서 지정)
// object 생성자 함수 : 빈 객체 생성 후 외부에서 변수, 키, 값을 추가 한다.
