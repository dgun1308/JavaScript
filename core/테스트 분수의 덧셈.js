// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
// 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 
// 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 
// 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
    // 공통 분모 만들기
    const commonDenom = denom1 * denom2;
    
    // 공통 분모에 따라 계산한 분자
    const newNumer1 = numer1 * denom2;
    const newNumer2 = numer2 * denom1;
    
    // 공통 분모에 따라 계산한 분자 값 끼리 더하기
    const totalNumer = newNumer1 + newNumer2;
    
    // 최대공약수(gcd) 구해서 기약분수 만들기
    // 삼항연산자로 gcd 사용문
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
        // b가 0 이면 a 반환
        // 아니면, b값을 다시 gcd(a)에 a를 b로 나눈
        // 나머지를 gcd(b)에 반환하여 다시 계산
        // 재귀함수
    }
    const commonGcd = gcd(totalNumer, commonDenom);
    
    // 분자와 분모를 최대공약수로 나눠서 기약분수로 반환
    const answer = [totalNumer / commonGcd, 
                    commonDenom / commonGcd];
    return answer;
}