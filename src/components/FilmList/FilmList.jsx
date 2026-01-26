export const FilmItem = (props) => {
    return (
        <div className="film-item">
            <p>{props.film.title}</p>
            <button onClick={() => props.onDeleteFilm(props.film.id)}>Delete</button>
        </div>
    )
}

export const FilmList = (props) => {
    return (
        <div>  
            {props.films.map(film => (
                <FilmItem 
                    film={film} 
                    key={film.id} 
                    onDeleteFilm={props.onDeleteFilm} 
                />
            ))}
        </div>
    )
}