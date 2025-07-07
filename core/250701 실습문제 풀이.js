// 실습문제 1번 : 사용자가 입력한 숫자가 홀수인지 짝수인지 판별하는 함수를 작성하세요. (if - else 문 이용하기)

const aa = 2;
if (aa % 2 === 0)
    console.log('짝수');
else
    console.log('홀수');


// 실습문제 2번 : 아래의 객체를 for in 반복문을 사용하여, 객체의 모든 키와 그에 해당하는 값을 출력하는 코드를 작성하세요.

var person = {
    firstName: 'GilDong',
    lastName: 'Hong',
    age: 20
};

for(let bb in person) {
    console.log(`bb : ${bb}`);
    console.log(`person[bb] : ${person[bb]}`);
};


// 실습문제 3번 : 두 개의 숫자를 매개변수로 받아서 그 합을 반환하는 함수를 작성하세요.

function cc(num1, num2) {
    return num1 + num2
};
console.log(cc(2,3));


// 실습문제 4번 : 아래의 함수들을 화살표 함수로 변환 해보세요.

// function greet() {
//     return "Hello!";
// };

// function getInfo(name, age) {
//     return `name: ${name}, age: ${age}`;
// };

greet = () => { return "Hello!" };

getInfo = (name, age) => {
    return `name: ${name}, age: ${age}`;
};

console.log(greet());
console.log(getInfo('홍길동', 20));


// 실습문제 5번 : 아래의 코드를 실행했을 때 출력결과가 나오도록 Person 생성자 함수를 정의하세요.



// 출력결과
// 안녕하세요, 제 이름은 홍길동 이고 나이는 20세 입니다.

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        return `안녕하세요, 제 이름은 ${this.name} 이고 나이는 ${this.age}세 입니다.`;
    }
};
const person = new Person("홍길동", 20);
person.sayHello();  // 마침표 표기법으로 생성자 함수 정의 후 출력 ?

console.log(person.sayHello("홍길동",20));


// 실습문제 6번

// (1) user 객체에 email 프로퍼티를 추가하고 "koala.ohgiraffers@gmail.com" 값을 넣으세요.
// (2) age 값을 21로 수정하세요.
// (3) name 값을 삭제하세요.

const user = {
    name : "koala",
    age : 20
};

user.age = 21;
user.email = "koala.ohgiraffers@gmail.com"
delete user.name;

console.log(user);


// 실습문제 7번

// car 객체와 fireCar 객체 정의하기
// - car 객체는 brand 프로퍼티를 갖고 있다.
// - fireCar 객체는 brand, color 프로퍼티를 갖고 있고 car 객체를 상속받는다.
// - fireCar 객체에서 brand는 상속받은 프로퍼티이고, color는 자기 자신의 프로퍼티이다.

// 위의 예제에서 자기 자신의 프로퍼티와 상속된 프로퍼티를 구분하세요.

let car = {
    brand : 'apple',
};

let fireCar = {
    __proto__ : car
};
fireCar.color = 'black';

for(let prop in fireCar) {
    console.log(prop);

    let isOwn = fireCar.hasOwnProperty(prop);

    if(isOwn) {
        console.log(`고유 프로퍼티 ${prop}`);
    }
    else {
        console.log(`상속 프로퍼티 ${prop}`);
    }
};
