import React, {useState} from "react";

export default function Giphyform({randomGiphy}){
    function handleSubmit(e){
        e.preventDefault();
        randomGiphy();
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type='submit'>Get a new Giphy</button>
        </form>
    )
}