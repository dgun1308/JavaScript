/*
02. 문자열 타입
문자열은 작은 따옴표(''), 큰 따옴표(""), 또는 백틱(``)으로 텍스트를 감싼다.
자바는 문자열을 객체로 표현하지만 자바스크립트의 문자열은 원시 타입(기본적으로 제공하는 타입)이며, 변경 불가능한 값이다.
*/

var string; // 변수 선언
string = 'javascript'
string = "javascript"
string = `javascript`

// 일반 문자열 내에서는 줄바꿈이 허용되지 않는다.
// var str = '안녕하세요. 
// 반갑습니다';

// 이스케이프 시퀀스를 사용해야 한다.
var str = '안녕하세요\n반갑습니다.';
console.log(str);

// 백틱을 사용하면 줄바꿈이 허용되고 모든 공백이 있는 그대로 적용된다.
var multiline = `안녕하세요.
반갑습니다`;
console.log(multiline);

var lastName = '홍';
var firstName = '길동';

// 문자열은 문자열 연산자 +를 사용해 연결할 수 있다.
console.log('제 이름은 ' + lastName + firstName + '입니다.');

/*
    템플릿 리터럴
    ES6부터 도입 된 멀티라인 문자열, 표현식 삽입 등의 편리한 문자열 처리 기능을 제공하는 문자열 표기법이다.
    이 때는 작은 따옴표, 큰 따옴표 대신 백틱을 사용해 표현한다.
*/

// 표현식 삽입을 이용하면 문자열 연산자보다 가독성이 좋고 간편하게 문자열을 조합할 수 있다.
console.log(`제 이름은 ${lastName}${firstName}입니다.`); //ex) 백틱
console.log('제 이름은 ${lastName}${firstName}입니다.'); //ex) 작은 따옴표
