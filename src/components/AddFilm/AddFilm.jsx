import { FilmList } from "../FilmList/FilmList"
import { FilmInput } from "../FilmInput/FilmInput"
import { useState } from "react"

export const AddFilm = () => {
    const [films, setFilms] = useState([])

    const onAddFilm = (newFilmString) => {
        const newFilm = {
            id: Date.now(),
            title: newFilmString,
            watched: false,  
            reaction: null   
        }
        setFilms([...films, newFilm]) 
    }

    const onDeleteFilm = (id) => {
        setFilms(films.filter(film => film.id !== id))
    }

    const toggleWatched = (id) => {
        setFilms(
            films.map(film =>
                film.id === id
                    ? { ...film, watched: !film.watched, reaction: null }
                    : film
            )
        )
    }

    const setLike = (id) => {
        setFilms(
            films.map(film =>
                film.id === id
                    ? { ...film, reaction: "like" }
                    : film
            )
        )
    }

    const setDislike = (id) => {
        setFilms(
            films.map(film =>
                film.id === id
                    ? { ...film, reaction: "dislike" }
                    : film
            )
        )
    }

    return (
        <div className="container">
            <h1>My top films:</h1>
            <FilmInput onAddFilm={onAddFilm} />
            <FilmList 
                films={films} 
                onDeleteFilm={onDeleteFilm}
                toggleWatched={toggleWatched}
                setLike={setLike}
                setDislike={setDislike}
            />
        </div>
    )
}
