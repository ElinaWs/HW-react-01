import { FilmItem } from "../FilmItem/FilmItem"

export const FilmList = (props) => {
    return (
        <div>  
            {props.films.map(film => (
                <FilmItem 
                    film={film} 
                    key={film.id} 
                    onDeleteFilm={props.onDeleteFilm}
                    toggleWatched={props.toggleWatched}
                    setLike={props.setLike}
                    setDislike={props.setDislike}
                />
            ))}
        </div>
    )
}
