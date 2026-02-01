import { FilmItem } from "../FilmItem/FilmItem"

export default function FilmList({ films, toggleWatched, onDeleteFilm, onSetReaction }) {
  return (
    <div>
      {films.map(film => (
        <FilmItem
          key={film.id}
          film={film}
          toggleWatched={toggleWatched}
          onDeleteFilm={onDeleteFilm}
          onSetReaction={onSetReaction}
        />
      ))}
    </div>
  );
}
