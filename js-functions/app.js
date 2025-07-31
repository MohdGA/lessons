function sayHello(name) {
  console.log(`Hello ${name}`);
}

// sayHello();
// sayHello("Mohammed");
// sayHello("Ali");
// sayHello("Hassan","Hussain","Salman");

function add(numA, numB) {
  return numA + numB;
}

console.log(add(2,5)); // or

let total = add(3,7);
console.log(total);

function planetHasWater(planet){
  let lowerCasePlaner = planet.toLowerCase();
  if(lowerCasePlaner === "earth" || lowerCasePlaner === "mars"){
    console.log(true);
  }else{
     console.log(false)
  }
};



// planetHasWater('Earth');   // should print true
// planetHasWater('Venus');   // should print false
// planetHasWater('Mars');    // should print true
// planetHasWater('Jupiter'); // should print false

// The first way to write a function
function computeArea(width,height){
  const area = width * height; // because its fixed result
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units.`;
};

console.log(computeArea(4,8));

// The second way to write a function
const nameofGame = function(game){
  return `The name of the ${game}.`;
};

console.log(nameofGame("Grand Theft Auto 6"));


//The third way to write a function
const push = (one,two) => {
  return one + two;
};

console.log(push(3,3))


const square = (num) => {
  return num * num;
};

console.log(square(5));

// The forth way to write a function
const meme = one => {
  console.log(one)
};

meme("Absolute Cinema");

function test1(){
  console.log("Test 1")
};

test1();

const test2 = function() {
  console.log("Test 2")
};

test2();

const test3 = () => {
  console.log("Test 3")
};

test3();

const test4 = num => num * 2;

console.log(test4(2));

const sumTwoNumbers = (numA,numB) => {
  return numA + numB;
};

console.log(sumTwoNumbers(5,6));

function plusTwoNumbers(numA,numB){

return numA + numB

};

console.log(5,5);

const totalofTwoNumbers = function(numA,numB){
  return numA + numB;
};

console.log(7,8);