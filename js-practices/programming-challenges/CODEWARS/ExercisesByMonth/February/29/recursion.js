function replicate(times, number) {
  if (times < 1) {
    return [];
  }
  return [number, ...replicate(times - 1, number)];
}
console.log(replicate(2, 2));
