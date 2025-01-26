import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const [movie, setMovie] = useState({})
    const params = useParams();
    const movieId = params.id;

    useEffect(() =>{
        fetch(`http://localhost:4000/movies/${movieId}`)
        .then(r => r.json())
        .then(data => setMovie(data))
        .catch(error => console.error(error))
      }, [movieId]);

      if(!movie.id){
        return <h1>Loading...</h1>;
      };
  
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>Time: {movie.time}</p>
        {movie.genres && (
          <div>
            {movie.genres.map((genre, index) => (
              <span key={index}>{genre}</span>
            ))}
          </div>
        )}
      </main>
    </>
  );
};

export default Movie;
