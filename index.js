const movies = [
  { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
  { title: "TheDarkKnight", genre: "Action", rating: 9.0, releaseYear: 2008 },
  { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 },
];
//
const addMovie = (collection, movie) => {
  collection.push(movie);
};
addMovie(movies, {
  title: "Tenet",
  genre: "Sci-Fi",
  rating: 7.5,
  releaseYear: 2020,
});
console.log("Movies after adding Tenet:");
console.log(movies);
//
const listMoviesByGenre = (collection, genre) => {
  return collection.filter((movie) => movie.genre === genre);
};
console.log("Movies by genre Sci-Fi:");
console.log(listMoviesByGenre(movies, "Sci-Fi"));
//
const findHighestRatedMovie = (collection) => {
  return collection.reduce((highest, movie) =>
    movie.rating > highest.rating ? movie : highest
  );
};
console.log("Highest rated movie:");
console.log(findHighestRatedMovie(movies));
//
const getMovieTitles = (collection) => {
  return collection.map((movie) => movie.title);
};
console.log("Creation of list of movies using map:");
console.log(getMovieTitles(movies));
//
const moviesAfterYear = (collection, year) => {
  return collection.filter((movie) => movie.releaseYear > year);
};
console.log("Movies after 2010:");
console.log(moviesAfterYear(movies, 2010));
//
console.log("Movies details:");
movies.forEach((movie) => {
  console.log(
    `${movie.title}(${movie.releaseYear})is a ${movie.genre} movie with a rating of ${movie.rating}.`
  );
});
//
