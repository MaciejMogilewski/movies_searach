import {useParams} from 'react-router-dom';
import useFetchMovie from "../hooks/useFetchMovie";

function MovieDetails() {
    const { movieId } = useParams();
    const {movie} = useFetchMovie(movieId);

    return (
        <pre style={{textAlign: 'left'}}>
            {JSON.stringify(movie, null, 2)}
        </pre>
    );
}

export default MovieDetails;