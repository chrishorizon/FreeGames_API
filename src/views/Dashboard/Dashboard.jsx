import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get("https://www.freetogame.com/api/games")
            .then(res => {
                console.log(res.data)
                setGames(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <fieldset>
            <legend>Dashboard</legend>
            <div>
                {games.map((game, i) => {
                    return <div key={i}>
                        <div className='allGames__container'>
                            <div className='allGames__container-card'>
                                <a href={game.game_url} className='allGames__container-url'>
                                    <div className="allGames__container-card_img">
                                        <img src={game.thumbnail} alt="image" height={200} width={250} />
                                        <div className="allGames__container-card_title">
                                            <h2>{game.title}</h2>
                                            <p>Free</p>
                                            <div className="allGames__container-card_description">
                                                <p>{game.short_description}</p>
                                                <div className="allGames__container-card_genre">
                                                    <p>{game.genre}</p>
                                                    <p>{game.platform}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </fieldset>
    )
}

export default Dashboard
