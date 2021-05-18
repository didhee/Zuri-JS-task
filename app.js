function convertFahrToCelsius(degree) {
  if (isNaN(degree) === false) {
    let celsiusDegree = (degree - 32) * (5 / 9);
    let roundedDegree = celsiusDegree.toFixed(4);
    return roundedDegree;
  } else {
    return `${degree} is not a valid number but a/an ${typeof degree}.`;
  }
}

console.log(convertFahrToCelsius(0));
console.log(convertFahrToCelsius("0"));
console.log(convertFahrToCelsius([1, 2, 3]));
console.log(convertFahrToCelsius({ temp: 0 }));
