import {Link, useParams} from 'react-router-dom';
import useFetchMovie from "../hooks/useFetchMovie";
import {
    Accordion, AccordionDetails, AccordionSummary,
    Avatar,
    Box,
    Button,
    ButtonGroup,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    Typography
} from "@mui/material";
import {movie as movieInterface} from "../helpers/movieTypes";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Image} from "@mui/icons-material";

type movieResponse = {
    game: movieInterface;
    errors?: string;
}

function MovieDetails() {
    const {movieId} = useParams();
    const {movie}: movieResponse = useFetchMovie(movieId);

    if (Object.keys(movie).length === 0) {
        return (
            <Typography>
                Loading...
            </Typography>
        );
    }

    return (
        <>
            <Typography variant='h2' component='h1' style={{textAlign: 'center'}}>
                {movie.title}
            </Typography>
            <Typography variant='h6' component='h2' style={{textAlign: 'center'}}>
                Rating: {movie.rating}, Rank: {movie.rank}
            </Typography>
            <Stack sx={{marginTop: 2, display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', display: 'flex', flexDirection: 'column'}}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <ImageIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Genre' secondary={movie.genre.join(', ')} style={{textAlign: 'center'}}/>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <WorkIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Director' secondary={movie.director} style={{textAlign: 'center'}}/>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BeachAccessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary='Year' secondary={movie.year} style={{textAlign: 'center'}}/>
                    </ListItem>
                </List>
                <Box>
                    <ButtonGroup variant="contained" aria-label="outlined primary button group">
                        <Button>
                            <a href={`https://www.google.com/search?q=${movie.title}`} target='_blank'>
                                More info
                            </a>
                        </Button>
                        <Button>
                            <a href={movie.trailer} target='_blank'>
                                Trailer
                            </a>
                        </Button>
                        <Button>
                            <Link to='/'>
                                Top 100 movies
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Box>
            </Stack>
            <Box>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="panel2bh-header"
                    >
                        <Typography>
                            Short description
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {movie.description}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        id="panel2bh-header2"
                    >
                        <Typography>
                            Writers
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            {movie.writers.join(', ')}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
            <Box style={{marginTop: 20, display: 'flex', justifyContent: 'center'}}>
                <img src={movie.image} alt={movie.title}/>
            </Box>
        </>

    );
}

export default MovieDetails;