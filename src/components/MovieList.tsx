import {Box, Typography} from "@mui/material";
import MovieCard from "./MovieCard";
import {movie} from "../helpers/movieTypes";
import Grid from "@mui/material/Unstable_Grid2";
import '@fontsource/exo/500.css';

type movieListProps = {
    movies: movie[]
}

function MovieList({movies}: movieListProps): JSX.Element {
    return (
        <Box>
            <Typography variant="h2" style={{textAlign: 'center'}} fontFamily='Exo'>
                Top 100 Movies
            </Typography>
            <Grid container spacing={2} marginTop={1}>
                {movies.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </Grid>
        </Box>
    );
}

export default MovieList;