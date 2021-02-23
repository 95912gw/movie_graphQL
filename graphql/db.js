let movies = [
    {
        id: 0,
        title: "Avengers",
        score: 9,
    },
    {
        id: 1,
        title: "Tommorrow",
        score: 10,
    },
    {
        id: 2,
        title: "Little Women",
        score: 10,
    },
    {
        id: 3,
        title: "Back to the Future",
        score: 8,
    },
    {
        id: 4,
        title: "Harry Potter",
        score: 10,
    }]

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movie.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
};

export const addMovie = (title, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        title,
        score
    };
    movies.push(newMovie);
    return newMovie;
};