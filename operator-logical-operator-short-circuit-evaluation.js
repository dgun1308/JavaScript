/* 01_논리 연산자 - 단축 평가 */
/* ||(OR), &&(AND), !(NOT) */

// OR의 경우 'apple'이 이미 Truthy 값이여서 true로 평가되고
// 논리 연산의 결과를 결정한 첫 번째 피연산자 apple을 그대로 반환한다.
console.log('apple' || 'banana');
console.log(false || 'banana');
console.log('apple' || false);

// AND의 경우 좌항, 우항 모두 확인해야 하므로
// 논리 연산의 결과를 결정한 두 번째 피연산자 banana를 그대로 반환한다.
console.log('apple' && 'banana');
console.log(false && 'banana');
console.log('apple' && false);

// if문 사용
var num = 1;

if(num % 2 == 0)
    console.log('짝수입니다.');
else
    console.log('홀수입니다.');

// 단축 평가를 사용하면 if문을 대체할 수 있다.
num % 2 == 0 && console.log('짝수입니다.'); // num이 홀수일 경우 값 반환 없음. / 짝수일 경우 마지막 값('짝수입니다.') 반환 / console.log('짝수입니다.')는 항상 true 값
num % 2 == 0 || console.log('홀수입니다.'); // num이 홀수일 경우 마지막 값('홀수입니다.') 반환 / 짝수일 경우 값 반환 없음. / console.log('홀수입니다.')는 항상 true 값
// if문 대체 단축 평가 원리 정리 
// : num이 홀수일 경우 AND문 모두 false이므로 반환 생략 후 OR문 true 값 ('홀수입니다.') 반환
// : num이 짝수일 경우 AND문 모두 true이므로 마지막 true 값 ('짝수입니다.') 반환되고 OR문 모두 true이므로 첫번 째 값 num % 2 == 0 가 반환되어 출력이 생략됨.
// : num % 2 == 0 은 출력문이 아니므로 내부 논리 연산에만 활용되며, 출력 값이 항상 생략된다.
