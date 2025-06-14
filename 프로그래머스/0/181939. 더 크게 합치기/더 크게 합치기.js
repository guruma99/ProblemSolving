function solution(a, b) {
    let num1 = parseInt(a + '' + b);
    let num2 = parseInt(b + '' + a);
    
    return Math.max(num1, num2);
}