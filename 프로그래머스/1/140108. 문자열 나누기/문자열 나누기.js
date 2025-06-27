function solution(s) {
    let answer = 0;
    let countX = 0;
    let countNotX = 0;
    let x = s[0];

    for (let i = 0; i < s.length; i++) {
        if (countX === 0) {
            x = s[i];
        }

        if (s[i] === x) {
            countX++;
        } else {
            countNotX++;
        }

        if (countX === countNotX) {
            answer++;
            countX = 0;
            countNotX = 0;
        }
    }

    if (countX !== 0 || countNotX !== 0) {
        answer++;
    }

    return answer;
}
