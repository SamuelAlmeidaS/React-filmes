import { useState, useEffect } from 'react';
import style from './App.module.css';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => { handleCLick() }, []);

  const handleCLick = async () => {
    let response = await fetch('https://api.b7web.com.br/cinema/');
    let json = await response.json();
    setMovies(json);
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
