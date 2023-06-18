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
            <h2 className="title">{movie.title}</h2>
            <div>
                {genre.map((genres , i ) => (
                    <p key={i} className="genre">{genres.name}</p>
                ))}
            </div>
            <img className="image" src={movie.poster}></img>
            <br></br>
            <p className="description">{movie.description}</p>
            <br></br>
            <h3 className="trailer-header">Trailer</h3>
            <iframe
                width="560"
                height="315"
                src={movie.trailer}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
            <br></br>
            <button className="backButton" onClick={() => handleClick()}>Back</button>
        </>
    )
}

export default MovieDescription;