import {useEffect, useState} from "react";
import axios from "axios";
import {API_HOST, API_KEY} from "../Constans";

const useFetchMovies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        getMovies(controller.signal).then((data) => {
            setMovies(data);
        })

        return () => {
            controller.abort();
        }
    }, []);

    const getMovies = async (signal) => {
        const response = await axios.get("/", {
            baseURL: `https://${API_HOST}`,
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            },
            signal
        });

        return response.data
    };

    return {movies, error}
}

export default useFetchMovies;
