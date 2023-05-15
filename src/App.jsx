import { useState, useEffect } from 'react';
import { Loading } from './components/loading'
import style from './App.module.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => { handleCLick() }, []);

  const handleCLick = async () => {
    try {
      setLoading(true);
      let response = await fetch('https://api.b7web.com.br/cinema/');
      let json = await response.json();
      setLoading(false);
      setMovies(json);
    } catch (error) {
      setLoading(false);
      alert('Erro! Tente novamente', error);
      console.error(error)
    }
  }

  return (
    <div className={style.main}>
      {loading && <Loading />}

      {!loading && movies.length > 0 &&
        <>
          <div className={style.header}>
            <h1>Filmes em cartaz</h1>
          </div>

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
        </>
      }
      {!loading && movies.length === 0 &&
        <Loading />
      }
    </div>
  );
}

export default App;
