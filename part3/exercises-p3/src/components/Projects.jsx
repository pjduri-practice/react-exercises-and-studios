import { useState } from 'react'
import data from '../data.json'

export function MyProjects() {
    const [index, setIndex] = useState(0)
    const { name, imageUrl, notes } = data[index]

    function handleClick() {
        setIndex(index < data.length - 1 ? index + 1 : 0)
    }

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h3>{name}</h3>
            <img src={imageUrl} alt={name} style={{maxHeight: '15rem'}} />
            <p>{notes}</p>
        </div>
    )
}