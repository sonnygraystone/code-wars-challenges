function descendingOrder(n) {
  return Array.from(n.toString())
    .map(Number)
    .sort((a, b) => b - a)
    .join()
    .replaceAll(",", "");
}

console.log(descendingOrder(123456789));
