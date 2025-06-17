function solution(num_list) {
    // array.reduce((누적값accumulator, 현재요소currentValue, (선택)현재인덱스currentIndex, (선택)원본배열array) =>, {}, 초기값);
    // 빈배열에서 오류발생 위험있음. 연산의 기본값을 기준으로 초기값을 설정
    let sum = num_list.reduce((acc, cur) => acc + cur, 0);
    let multip = num_list.reduce((acc, cur) => acc * cur, 1);
    
    return multip < sum ** 2 ? 1 : 0;
}