/* 01_전역과 지역 스코프 */
/* 전역은 코드의 가장 바깥 영역을 말하며 전역 스코프를 만든다.
   전역에서 변수를 선언하면 전역 스코프를 갖는 전역 변수가 되며, 전역 변수는 어디서든지 참조할 수 있다.
   지역이란 함수 몸체 내부를 말하며 지역은 지역 스코프를 만든다.
   지역에서 변수를 선언하면 지역 스코프를 갖는 지역 변수가 되며, 자신의 지역 스코프와 하위 지역 스코프에서 유효하다. 
*/

// 전역 변수
var x = 'global x';
var y = 'global y';

function outer() {
    var z = "outer local z";    // 지역 변수 z

    console.log(x);             // 전역 변수 출력됨
    console.log(y);             // 전역 변수 출력됨
    console.log(z);             // 지역 변수 출력됨

    function inner () {
        var x = "inner local x";    // 지역 변수 x
        var y = "inner local y";    // 지역 변수 y

        console.log(x);         // 지역 변수 출력됨
        console.log(y);         // 전역 변수 출력됨
        console.log(z);         // 지역 변수 출력됨
        // 제일 가까운 변수를 출력함. 지역 변수 탐색 -> 전역 변수 탐색
    }
    
    inner();
}

outer();

console.log(x);     // 전역 변수 출력됨
// console.log(z);     // 함수 외부에서 지역 변수 출력 불가
