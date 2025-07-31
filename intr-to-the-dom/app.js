// Select an element from the HTML
const h1 = document.querySelector('h1');
const paragraphElement = document.querySelector(".cool");
const bodyElement = document.querySelector('body');
const liElement = document.querySelectorAll("li");
const buttonElement = document.querySelector('button');
const ulElement = document.querySelector('ul');

console.log(paragraphElement);

paragraphElement.textContent = "Demon Slayer is the best anime with 10 of 10 characters design, try more changes to the text if you want.";

if(paragraphElement !== ""){
  console.log("One Piece is a trash anime.");
};

paragraphElement.style.color = "blue";

// create Element for HTML
const h2 = document.createElement('h2');
h2.textContent = "Comment Section!";
bodyElement.appendChild(h2);


liElement.forEach((commentElement) => {
  commentElement.style.fontSize = "30px";
  
})

if(buttonElement.hasAttribute('disabled') === true){
  buttonElement.removeAttribute('disabled')
};

console.log(ulElement.getAttribute('id'));

buttonElement.setAttribute('id','submit');
buttonElement.classList.toggle('id');
buttonElement.classList.replace('id','action');
console.log(buttonElement.textContent);
let in = []
foreach(content,index)