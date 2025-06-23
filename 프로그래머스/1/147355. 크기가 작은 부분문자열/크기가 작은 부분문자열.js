function solution(t, p) {
  let result = 0;

  for (let i = 0; i <= t.length - p.length; i++) {
    let sub = t.slice(i, i + p.length);
    if (sub <= p) {
      result++;
    }
  }

  return result;
}