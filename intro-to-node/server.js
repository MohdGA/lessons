const fs = require('fs');

// fs.writeFile('./hello.txt', 'hello, friend', () => {
//   console.log('done creating file');
// });

const validator = require('validator');

console.log(validator.isEmail('test@gmail.com'));

console.log(validator.isUppercase('mohd'));

console.log(validator.isUppercase('MOHd'));

console.log(validator.isUppercase('MOHD'));

const sum  = (num1,num2) => {
  return num1 + num2;
};

function test(num1,num2){
  console.log("HEllO");
};

fs.writeFile('./gg.txt', "hello Mohd", () => {
  console.log("DONE")
})

module.exports = sum;

// module.exports = {}