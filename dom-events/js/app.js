/*----------- Variables ------------*/
let countLike = 0;
/*----------- Functions ------------*/
const handleLike = () => {
  countLike += 1;
  console.log(countLike);
  likeButtonElement.textContent = `${countLike} is like this post!`;
};

const handleInputElement = () => {
 if(inputElement.value !== ""){
  const liElement = document.createElement('li');
  liElement.textContent = inputElement.value;
  ulElement.appendChild(liElement);
  inputElement.value = "";
 };
};
/*----------- Cashed Element References ------------*/
const likeButtonElement = document.querySelector('#like-button');
const commentButton = document.querySelector('#comment-button');
const ulElement = document.querySelector('ul');
const inputElement = document.querySelector('input');

console.log(inputElement);
console.dir(inputElement);

/*----------- Event Listeners ------------*/
likeButtonElement.addEventListener('click', handleLike);
commentButton.addEventListener('click', handleInputElement);



