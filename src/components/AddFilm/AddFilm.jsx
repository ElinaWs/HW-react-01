import { useState } from "react"

export const AddFilm = () => {
    const [films, setFilms] = useState([])
    const [value, setValue] = useState('')

    const onAddFilm = () => {
        const newFilm = { id: Date.now(), title: value }
        setFilms([...films, newFilm])
        setValue('')
    }

    return (
        <div className="container">
            <h1>My top films:</h1>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={onAddFilm}>Add</button>
            
            <div>
                {films.map(f => <p key={f.id}>{f.title}</p>)}
            </div>
        </div>
    )
}