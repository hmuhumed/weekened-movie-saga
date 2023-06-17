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
    



    return (
        <>
        
        
        
        </>
    )
}

export default MovieDescription;