import { createBrowserRouter } from "react-router-dom";
import MovieListContainer from "./components/MovieListContainer";
import MovieDetails from "./components/MovieDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieListContainer />,
    },
    {
        path: "/movies/:movieId",
        element: <MovieDetails />,
    },
]);