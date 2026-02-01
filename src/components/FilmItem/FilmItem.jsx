import NullFilm from "../NullFilm/NullFilm"

export const FilmItem = (props) => {
  return (
    <div className="film-item">
      <p>{props.film.title}</p>

      <button onClick={() => props.toggleWatched(props.film.id)}>
        {props.film.watched ? "Watched" : "Add as watched"}
      </button>

      <button onClick={() => props.onDeleteFilm(props.film.id)}>
        Delete
      </button>

      {props.film.watched && (
        <NullFilm
          reaction={props.film.reaction}
          onLike={() => props.setLike(props.film.id)}
          onDislike={() => props.setDislike(props.film.id)}
        />
      )}
    </div>
  )
}
