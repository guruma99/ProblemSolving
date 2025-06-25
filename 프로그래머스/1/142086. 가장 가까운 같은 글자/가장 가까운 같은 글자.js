function solution(s) {
    const result = [];
    const lastIndex = {};

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (lastIndex[ch] !== undefined) {
            result.push(i - lastIndex[ch]);
        } else {
            result.push(-1);
        }

        lastIndex[ch] = i;
    }

    return result;
}
