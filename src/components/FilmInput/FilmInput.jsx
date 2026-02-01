import { useState } from "react";

export const FilmInput = (props) => {
  const [filmValue, setFilmValue] = useState("");

  const submitFilm = () => {
    if (filmValue.trim()) {
      props.onAddFilm(filmValue);
      setFilmValue("");
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="New film.."
        value={filmValue}
        onChange={(e) => setFilmValue(e.target.value)}
      />
      <button onClick={submitFilm}>Add</button>
    </div>
  );
}
