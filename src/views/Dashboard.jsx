import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [game, setGame] = useState({});

    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     axios.get("https://www.freetogame.com/api/games")
    //         .then(res => {
    //             console.log(res.data)
    //             setGame(res.data)
    //         })
    //             // setLoading(false)
    //             // setGame(res.data)})
    //         .catch(err => console.log(err))
    // })

    // if (loading) return ("Loading...");

    return (
        <fieldset>
            <legend>Dashboard</legend>
            <div>
                <h1>Titles</h1>
                <p>{game.title}</p>
                <p>{ game.genre }</p>
            </div> : <p>Click the button</p>
        </fieldset>
    )
}

export default Dashboard
