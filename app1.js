function checkYuGiOh(n) {
  let emptyArray = [];
  if (isNaN(n) === false) {
    for (i = 1; i <= n; i++) {
      if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
        emptyArray.push("yu-gi-oh");
      } else if ((i % 5 == 0 && i % 3 == 0) || (i % 5 == 0 && i % 2 == 0)) {
        emptyArray.push("yu-oh");
      } else if (i % 2 == 0 && i % 3 == 0) {
        emptyArray.push("yu-gi");
      } else if (i % 5 == 0) {
        emptyArray.push("oh");
      } else if (i % 3 == 0) {
        emptyArray.push("gi");
      } else if (i % 2 == 0) {
        emptyArray.push("yu");
      } else {
        emptyArray.push(i);
      }
    }

    return emptyArray;
  } else {
    return `invalid parameter: "${n}"`;
  }
}

console.log(checkYuGiOh(10));
console.log(checkYuGiOh("5"));
console.log(checkYuGiOh("fizzbuzz is meh"));
