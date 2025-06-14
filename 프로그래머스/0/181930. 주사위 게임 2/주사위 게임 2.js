function solution(a, b, c) {
    let result = 0;
    let basicCalc = a+b+c;
    if(a===b && b===c) {
        result = basicCalc * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3);
    } else if(a==b || b==c || a==c) {
        result = basicCalc * (a**2 + b**2 + c**2);
    } else {
        result = basicCalc;
    }
        
    return result;
}