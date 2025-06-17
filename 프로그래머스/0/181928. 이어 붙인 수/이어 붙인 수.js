function solution(num_list) {
    let oddStr = '';
    let evenStr = '';

    for (const num of num_list) {
        if (num % 2 === 0) {
            evenStr += num;
        } else {
            oddStr += num;
        }
    }

    return Number(oddStr) + Number(evenStr);
}
