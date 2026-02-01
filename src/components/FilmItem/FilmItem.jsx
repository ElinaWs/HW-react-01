export default function FilmItem({ film, toggleWatched, onDeleteFilm }) {
  return (
    <div style={{ border: "1px solid gray", padding: 10, marginBottom: 10 }}>
      <h3>{film.title}</h3>
      <button onClick={() => toggleWatched(film.id)}>
        {film.watched ? "Watched" : "Add as watched"}
      </button>
      <button onClick={() => onDeleteFilm(film.id)}>Delete</button>
    </div>
  );
}
