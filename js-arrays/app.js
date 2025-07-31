const movies = ['Balarina', "john wick", 'Demon Slayer'];

const FirstMovie = movies[0];
const favMovie = movies[3] = "Jujutsu Kaisen";
const lastMovie = movies[movies.length -1];

console.log(movies);

movies.push('Dune',"Parasite");

console.log("--------------------");

console.log(movies);

let removeMovie = movies.pop();

const logMovies = (movie) =>{
  console.log(`My favorite movie is ${movie}`);
}

console.log("--------------------");

console.log(removeMovie);

console.log("--------------------");

console.log(movies);

console.log("--------------------");

for(let i = 0; i < movies.length; i+=2){

let movie = movies[i];
logMovies(movie);

};

console.log("--------------------");

// for shourter way
for(const movie of movies){
logMovies(movie);
}
console.log("--------------------");

// easier way specific for arrays
movies.forEach(logMovies);

// another way
movies.forEach((movie) => console.log(movie));

// practice question
const books = [];
books.push('The Shining');
books.push('Pride and Prejudice');
books.push("Ali's book");
books.push("Ahmed's book");

console.log(books);

books[1] = "Dune";

console.log("--------------------");

books.forEach((book) => console.log(book));

console.log("--------------------");
console.log("--------------------");

function each(arr, cb) {
  for (const item of arr) {
    cb(item);
  }
}

each(movies, logMovies);



