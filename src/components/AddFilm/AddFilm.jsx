import { useState } from "react";
import { FilmInput } from "../FilmInput/FilmInput";
import FilmList from "../FilmList/FilmList";

export const AddFilm = () => {
  const [films, setFilms] = useState([]);

  const onAddFilm = (newFilmString) => {
    const newFilm = {
      id: Date.now(),
      title: newFilmString,
      watched: false
    };
    setFilms([...films, newFilm]);
  };

  const onDeleteFilm = (id) => {
    setFilms(films.filter(film => film.id !== id));
  };

  const toggleWatched = (id) => {
    setFilms(
      films.map(film =>
        film.id === id ? { ...film, watched: !film.watched } : film
      )
    );
  };

  return (
    <div className="container">
      <h1>My top films:</h1>
      <FilmInput onAddFilm={onAddFilm} />
      <FilmList 
        films={films} 
        toggleWatched={toggleWatched} 
        onDeleteFilm={onDeleteFilm} 
      />
    </div>
  );
};

export default AddFilm;
