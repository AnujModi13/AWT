const Calculator = require("./calculator");
const calculator = new Calculator();
const result1 = calculator.add(5, 7);
console.log(`5 + 7 = ${result1}`);
const result2 = calculator.sub(5, 7);
console.log(`5 - 7 = ${result2}`);

const result3 = calculator.div(5, 7);
console.log(`5 / 7 = ${result3}`);
const result4 = calculator.mul(5, 7);
console.log(`5 * 7 = ${result4}`);
