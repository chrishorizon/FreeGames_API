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
                                <div className="allGames__container-card_img">
                                    <img src={game.thumbnail} alt="image" height={200} width={250} />
                                    <div className="allGames__container-card_title">
                                        
                                        <div className="allGames__container-card_description">
                                            <div className="allGames__container-card_genre">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </fieldset>
    )
}

export default Dashboard
