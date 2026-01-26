import { FilmList } from "../FilmList/FilmList"
import { FilmInput } from "../FilmInput/FilmInput"
import { useState } from "react"

export const AddFilm = () => {
    const [films, setFilms] = useState([])

    const onAddFilm = (newFilmString) => {
        const newFilm = {
            id: Date.now(),
            title: newFilmString
        }
        setFilms([...films, newFilm]) 
    }

    const onDeleteFilm = (id) => {
        setFilms(films.filter(film => film.id !== id))
    }

    return (
        <div className="container">
            <h1>My top films:</h1>
            <FilmInput onAddFilm={onAddFilm} />
            <FilmList films={films} onDeleteFilm={onDeleteFilm} />
        </div>
    )
}