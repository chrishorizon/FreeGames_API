import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

const Category = () => {

    const {category} = useParams();

    const [cat, setCat] = useState([]);

    useEffect(() => {
        axios.get(`https://www.freetogame.com/api/games?category=${category}`)
        .then(res => {
            console.log(res.data)
            setCat(res.data)
        })
        .catch(err => console.log(err))
    }, [category])

    return (
        <div>
            <h1>Games by Category</h1>
            {
                cat.map((c, idx) => {
                    return <div key={idx}>
                        <p>{c.title} ========= {c.genre}</p>
                    </div>
                })
            }
        </div>
    )
}

export default Category
