import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [title, setTitle] = useState({});

    useEffect(() => {
        fetch("https://www.freetogame.com/api/games")
            .then(res => res.json())
            .then(jsonRes => console.log(jsonRes))
            .catch(err => console.log(err))
    })

    return (
        <fieldset>
            <legend>Dashboard</legend>
        </fieldset>
    )
}

export default Dashboard
