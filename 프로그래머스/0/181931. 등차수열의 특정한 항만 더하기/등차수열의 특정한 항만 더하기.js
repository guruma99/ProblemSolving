function solution(a, d, included) {
  return included.reduce((sum, flag, i) => {
    return flag ? sum + (a + i * d) : sum;
  }, 0);
}