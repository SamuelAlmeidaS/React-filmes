import { useState, useEffect } from 'react';
import style from './App.module.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => { handleCLick() }, []);

  const handleCLick = () => {
    fetch('https://api.b7web.com.br/cinema/')
      .then(response => {
        return response.json();
      })
      .then(json => {
        setMovies(json);
      })
  }

  return (
    <div className={style.main}>

      {/* <button classNmae={style.button} onClick={handleCLick}>Click aqui</button>
      Total de filmes: {movies.length} */}

      <div className={style.grid}>

        {movies.map((item, index) => (
          <div key={index} className={style.flex}>

            <img src={item.avatar} alt="" className={style.width} />

            <div className={style.title}>

              {item.titulo}

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
