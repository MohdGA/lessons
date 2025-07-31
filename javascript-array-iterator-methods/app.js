const nums = [1, 2, 3, 4, 5];


let map1 = nums.map((element) => {
  return element * 2;
});


const instructors = ['Beryl', 'Hunter', 'Joe', 'Jurgen', 'Ben', 'David', "mohd"];

let inst = instructors.map((element) => {
  return `${element} is awesome`;
});

// another way
let inst2 = instructors.map((ele) => `${ele} is awesome`);


// console.log(inst2);


const dirtyWater = ['water', 'water', 'dirt', 'bacteria'];

let cleanWater = dirtyWater.filter((element) => {
  if(element === "water"){
    return element
  };
});

// console.log(cleanWater);

const people = ['jerks', 'nice people', 'jerks', 'nice people', 'nice people'];

let nicePeople = people.filter((element) => {
  if(element === 'nice people'){
    return element;
  };
});

console.log(nicePeople);