const fibonacci = (n) => {
  if (n < 2) return [n];

  const prevFib = fibar(n - 1);
  const nextFib = prevFib.at(-1) + prevFib.at(-2);
  return prevFib.concat(nextFib);
};
