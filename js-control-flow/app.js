const Name = 12;
const TestName = "12";

console.log(Name === TestName);
const test = "this is a test for push";

if(Name === TestName && 12 >= 12 || Name == TestName){
  console.log("right")
}

//console.log(12 == Number)

let Testcolor = "Yellow";
let color = Testcolor.toLowerCase();

if(color === "green"){
  console.log("Go");
}else if(color === "yellow"){
  console.log("Slow");
}else if(color === "Red"){
  console.log("Stop");
}else{
  console.log("whatever");
}

for (let number = 1; number <=20; number++) {
  let squared = number;
  squared = number * number;
  console.log(`${number} squared is ${squared}`)
}