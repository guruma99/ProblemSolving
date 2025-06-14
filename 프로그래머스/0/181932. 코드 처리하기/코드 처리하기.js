function solution(code) {
    let mode = 0;
    let ret = "";

    for (let i = 0; i < code.length; i++) {
        const el = code[i];

        if (el == "1") {
            mode = mode == 0 ? 1 : 0;
            continue;
        }

        if (mode == 0 && i % 2 == 0) {
            ret += el;
        } else if (mode == 1 && i % 2 == 1) {
            ret += el;
        }
    }

    return ret.length ? ret : "EMPTY";
}