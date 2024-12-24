/*let movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

const addMovie = (movie) => {
    movies.push(movie);
    updateDisplay();
};

const listMoviesByGenre = (genre) => {
    return genre ? movies.filter(movie => movie.genre === genre) : movies;
};

const findHighestRatedMovie = () => {
    return movies.reduce((highest, movie) => 
        movie.rating > highest.rating ? movie : highest
    );
};

const getMovieTitles = () => {
    return movies.map(movie => movie.title);
};

const moviesAfterYear = (year) => {
    return year ? movies.filter(movie => movie.releaseYear > year) : movies;
};

const updateDisplay = () => {
    const moviesList = document.getElementById('moviesList');
    const highestRated = document.getElementById('highestRated');
    const filterGenre = document.getElementById('filterGenre').value;
    const filterYear = document.getElementById('filterYear').value;

    let filteredMovies = movies;
    if (filterGenre) {
        filteredMovies = filteredMovies.filter(movie => movie.genre === filterGenre);
    }
    if (filterYear) {
        filteredMovies = filteredMovies.filter(movie => movie.releaseYear > filterYear);
    }

    const topMovie = findHighestRatedMovie();
    highestRated.innerHTML = `
        <strong>Highest Rated Movie:</strong> ${topMovie.title} 
        (Rating: ${topMovie.rating}, ${topMovie.genre}, ${topMovie.releaseYear})
    `;

    moviesList.innerHTML = filteredMovies.map(movie => `
        <div class="movie-card">
            <div class="movie-title">${movie.title}</div>
            <div class="movie-info">
                <div>Genre: ${movie.genre}</div>
                <div>Rating: ${movie.rating}</div>
                <div>Year: ${movie.releaseYear}</div>
            </div>
        </div>
    `).join('');
};

const filterMovies = () => {
    updateDisplay();
};

document.getElementById('addMovieForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const newMovie = {
        title: document.getElementById('title').value,
        genre: document.getElementById('genre').value,
        rating: parseFloat(document.getElementById('rating').value),
        releaseYear: parseInt(document.getElementById('releaseYear').value)
    };
    addMovie(newMovie);
    e.target.reset();
});

updateDisplay();*/

const readline = require('readline');

let movies = [
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Interstellar", genre: "Sci-Fi", rating: 8.6, releaseYear: 2014 }
];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const addMovie = (movie) => {
    movies.push(movie);
    displayMovies();
};

const listMoviesByGenre = (genre) => {
    return genre ? movies.filter(movie => movie.genre === genre) : movies;
};

const findHighestRatedMovie = () => {
    return movies.reduce((highest, movie) => 
        movie.rating > highest.rating ? movie : highest
    );
};

const getMovieTitles = () => {
    return movies.map(movie => movie.title);
};

const moviesAfterYear = (year) => {
    return movies.filter(movie => movie.releaseYear > year);
};

const displayMovies = (filteredMovies = movies) => {
    console.clear();
    console.log('\n=== Movies List ===');
    filteredMovies.forEach(movie => {
        console.log(`
Title: ${movie.title}
Genre: ${movie.genre}
Rating: ${movie.rating}
Year: ${movie.releaseYear}
-------------------`);
    });

    const topMovie = findHighestRatedMovie();
    console.log(`\nHighest Rated Movie: ${topMovie.title} (Rating: ${topMovie.rating}, ${topMovie.genre}, ${topMovie.releaseYear})\n`);
};

const promptForMovie = () => {
    rl.question('\nAdd a new movie:\nTitle: ', (title) => {
        rl.question('Genre: ', (genre) => {
            rl.question('Rating (0-10): ', (rating) => {
                rl.question('Release Year: ', (year) => {
                    const newMovie = {
                        title,
                        genre,
                        rating: parseFloat(rating),
                        releaseYear: parseInt(year)
                    };
                    addMovie(newMovie);
                    showMenu();
                });
            });
        });
    });
};

const filterByGenre = () => {
    rl.question('\nEnter genre to filter by: ', (genre) => {
        const filtered = listMoviesByGenre(genre);
        displayMovies(filtered);
        showMenu();
    });
};

const filterByYear = () => {
    rl.question('\nShow movies after year: ', (year) => {
        const filtered = moviesAfterYear(parseInt(year));
        displayMovies(filtered);
        showMenu();
    });
};

const showMenu = () => {
    console.log('\nMenu:');
    console.log('1. Display all movies');
    console.log('2. Add new movie');
    console.log('3. Filter by genre');
    console.log('4. Filter by year');
    console.log('5. Exit');
    
    rl.question('\nSelect an option (1-5): ', (choice) => {
        switch(choice) {
            case '1':
                displayMovies();
                showMenu();
                break;
            case '2':
                promptForMovie();
                break;
            case '3':
                filterByGenre();
                break;
            case '4':
                filterByYear();
                break;
            case '5':
                console.log('\nGoodbye!');
                rl.close();
                break;
            default:
                console.log('\nInvalid option!');
                showMenu();
        }
    });
};

// Start the application
console.clear();
displayMovies();
showMenu();