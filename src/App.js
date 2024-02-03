
import './App.css';
import Gif from "./components/Gif"
import Form from "./components/Form"
import { useState } from "react"
import { useEffect } from "react"

function App() {
  const apiKey = "UlbWBsyOfoIlPY5GRk5ATFEDga3unkwe"
  const [gif, setGif] = useState(null)
  const getGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` 
                
    const response = await fetch(url)
    const data = await response.json()
    setGif(data)
  }

  useEffect(() => {
    getGif("Joke")
  }, []) 

  return (
    <div className="App">
      <h1 className='App-header'>Giphy</h1>
      <Form gifSearch={ getGif }/>
      <Gif gif={ gif }/>
    </div>
  );
}

export default App;
