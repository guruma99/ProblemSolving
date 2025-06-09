function solution(a, b) {
    const abString = parseInt(String(a) + String(b));
    const abMultiply = 2 * a * b;
    
    var answer = abString >= abMultiply ? abString : abMultiply;
    return answer;
}