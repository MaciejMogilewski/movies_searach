import {Link} from "react-router-dom";

interface movie {
    rank: number;
    title: string;
    thumbnail: string;
    rating: string;
    id: string;
    year: number;
    image: string;
    description: string;
    trailer: string;
    genre: string[];
    director: string[];
    writers: string[];
    imdbid: string;
}

type movieListProps = {
    movies: movie[]
}

function MovieList({movies}: movieListProps): JSX.Element {
    return (
        <div>
            {movies.map((movie) => (
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                    {movie.title}, {movie.rating}
                </Link>
            ))}
        </div>
    );
}

export default MovieList;