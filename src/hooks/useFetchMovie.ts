import {useEffect, useState} from "react";
import axios from "axios";
import {API_HOST, API_KEY} from "../Constans";

const useFetchMovie = (id) => {
    const [movie, setMovie] = useState({});
    const [errors, setErrors] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        getMovie(controller.signal)
            .then((data) => {setMovie(data)})
            .catch(setErrors)

        return () => {
            controller.abort();
        }
    }, [id])

    const getMovie = async (signal) => {
        const response = await axios.get(`/${id}`, {
            baseURL: `https://${API_HOST}`,
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST
            },
            signal,
            // params: {
            //     id
            // }
        });

        return response.data
    }

    return {movie, errors}
};

export default useFetchMovie;