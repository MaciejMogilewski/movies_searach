import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {movie as movieInterface} from "../helpers/movieTypes";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

type gameCardsProps = {
    movie: movieInterface;
}

function MovieCard({movie}: gameCardsProps) {
    return (
        <Grid xs={12} sm={6} md={4} lg={3}>
            <Card sx={{width: "100%", minHeight: "100%", display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        height='140'
                        image={movie.image}
                        alt={movie.title}
                    />
                    <CardContent >
                        <Typography gutterBottom variant='h5' component='div'>
                            {movie.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {movie.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/movies/${movie.id}`}>
                        <Button variant='contained'>
                            Read more
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default MovieCard;