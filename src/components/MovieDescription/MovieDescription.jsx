import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./MovieDescription.css";

function MovieDescription() {
    
    const dispatch = useDispatch();
    const history = useHistory();
    // The useParams() hook is a React Router hook that allows you to access the parameters of the current URL
    const params = useParams();

    useEffect(() => {
        dispatch({
            // we have a generator function listen in for action type 'FETCH_GENRES' and it will run the function connected with it on the rootSaga
            type: 'FETCH_GENRES',
            // payload will send the parameter.id to that generator function which will then store the id in our genre reducer
            payload: params.id
        })
    }, [params.id]);


    const movie = useSelector((store) => store.movies.find((movie) => movie.id == params.id))

    const genre = useSelector(store => store.genres);

    // This function will be connected to our back button to send the user back to the homepage.
    const handleClick = () => {
        history.push("/")
    }


    return (
        <>
            <h2 className="title">Title: {movie.title}</h2>
            <div>
                {genre.map((genres , i ) => (
                    <p key={i} className="genre">Genre: {genre.name}</p>
                ))}
            </div>
            
        
        </>
    )
}

export default MovieDescription;