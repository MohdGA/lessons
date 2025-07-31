const fs = require('node:fs/promises');
const { resolve } = require('node:path');


// const usersApiUrl = 'https://jsonplaceholder.typicode.com/users/';

// const getAllUsers = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getAllUsers(usersApiUrl);


const userApiUrl = 'https://jsonplaceholder.typicode.com/users/';

// New endpoints:
const postsApiUrl = 'https://jsonplaceholder.typicode.com/posts/4';
const todosApiUrl = 'https://jsonplaceholder.typicode.com/todos/4';


const fetchMultiple = async () => {
  try {
    const postsPromise = fetch(postsApiUrl).then((res) => res.json());
    const todosPromise = fetch(todosApiUrl).then ((res) => res.json());
    const responses = await Promise.all([postsPromise, todosPromise]);
    console.log(responses);
  } catch (error) {
    console.log(error);
  }
};

fetchMultiple();