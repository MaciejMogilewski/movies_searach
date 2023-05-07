import MovieList from "./MovieList";
import useFetchMovies from "../hooks/useFetchMovies";

function MovieListContainer(): JSX.Element {

    const {movies} = useFetchMovies();

    return (
        <MovieList movies={movies}/>
    );
}

export default MovieListContainer;