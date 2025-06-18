function solution(n, control) {
  const numMap = { w: 1, s: -1, d: 10, a: -10 };

  for (const num of control) {
    n += numMap[num];
  }

  return n;
}