function solution(price, money, count) {
    let resultPrice = 0;
    for(let i = 1; i <= count; i++) {
        resultPrice += price * i;
    }
    return resultPrice > money ? resultPrice - money : 0; 
}