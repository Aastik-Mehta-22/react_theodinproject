import { useEffect, useState } from 'react'
import './App.css'
function App() {

  const [score,setScore] = useState(0);
  const [gameOver,setGameOver] = useState(false);
  const [win,setWin] = useState(false);
  const [data,setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(false);
  const [mode,setMode] = useState("Light");

  const heading = "heading"
  const heading2 = "heading2"

  if (mode == 'Dark') {
    document.querySelector('body').style.backgroundColor = 'white'
  }
  else document.querySelector('body').style.backgroundColor = 'Black'
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=10"
      );
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);

  const handleImgClick = (elm) => {
    if (elm.clicked) {
      setGameOver(true);
    } else {
      elm.clicked = true;
      setScore((prev) => prev + 1);
      setData(shuffleArray(data));
    }
    if (score === 10) {
      setGameOver(true);
      setWin(true);
    }
  };


  const handleNewGame = () => {
    setGameOver(false);
    setScore(0);
    setWin(false);
    setLoading(true)
    setError(false)
    fetchData()
  }

  function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  function handleMode(){

    if (mode == 'Dark') {

      setMode("Light");
    }
    else setMode("Dark");
  }
  

  if(error) return <div>{error.message}</div>
  return (
    <> 
      <h1 className={mode == 'Dark' ? heading : heading2}>Memory Card Game</h1>
      <button onClick={handleMode} >{mode} Mode</button>
      <div id='score'>Score: {score}</div> 

      {!gameOver ? (
        <ImageGallery loading={loading} data={data} handleClick={handleImgClick} />
      ) : (
        <>
          {win ? (
            <>
              <h2>Congratulations!</h2>
              <div>You Won! Your Score is perfect {score}</div>
            </>
          ) : (
            <>
              <h2 className='gameOver'>Game Over</h2>
              <div id='scr'>Your Score is {score}</div>
            </>
          )}

          <br />
          <button onClick={handleNewGame} >New Game</button>
        </>
      )}

    </>
  )
}

const ImageGallery = ({ loading, data, handleClick }) => {
  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : data ? (
        data.map((elm) => (
          <>
          <img
            key={elm.id}
            src={elm.download_url}
            alt={elm.author}
            className="card"
            style={{ width: "15rem", height: "9rem" }}
            onClick={() => handleClick(elm)}
          />
          
          </>
          
        )
      )
      ) : (
        <h3>No data Found</h3>
      )}
    </>
  );
};

export default App
