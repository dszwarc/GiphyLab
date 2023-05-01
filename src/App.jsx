import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Giphyform from './Giphyform/Giphyform'
import Giphydisplay from './Giphydisplay/Giphydisplay'



function App() {
  const [giphyURL, setGiphyURL] = useState('https://api.giphy.com/v1/gifs/random?api_key=3C3ThGduGX16kAHj6S2bD7vzXPj4ODnC&tag=&rating=pg-13')
  const [giphy, setGiphy] = useState();
  const [findRnd, setFindRnd] = useState(true);

  function randomGiphy(){
    setFindRnd(!findRnd)
  }

  useEffect(()=>{
    async function getRandomGiphy(){
      try{
        const response = await fetch(giphyURL);
        const data = await response.json();
        setGiphy(data.data.images.original.url);
      }catch(err){
        console.log(err)
      }
    }

    getRandomGiphy()

  },[findRnd])

  return (
    <>
        <h1>This is my Giphy App</h1>
        <Giphyform randomGiphy={randomGiphy}/>
        <Giphydisplay giphy={giphy}/>
    </>
  )
}

export default App
