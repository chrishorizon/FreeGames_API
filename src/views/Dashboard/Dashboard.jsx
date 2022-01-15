import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './dashboard.css'

const Dashboard = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get("https://www.freetogame.com/api/games")
            .then(res => {
                console.log(res.data)
                setGames(res.data)

                let temp = games;
                let a = "";
                for(let ele of temp) {
                    console.log(ele.genre);
                }
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='allGames__container'>
            {games.map((game, i) => {
                return <div key={i}>

                        <section className='allGames__container-cards'>
                            <div className="allGames__container-cards_img">
                                <a href={game.game_url} className='allGames__container-url'>
                                    <img src={game.thumbnail} alt="image" />
                                </a>
                                <div className="allGames__container-cards_title">
                                    <a href={game.game_url} className='allGames__container-url'>
                                        <h2>{game.title}</h2>
                                    </a>
                                    <p>Free</p>
                                    <div className="allGames__container-cards_description">
                                        <p>{game.short_description}</p>
                                        <div className="allGames__container-cards_genre">
                                            <p>{game.genre}</p>
                                            <p>{game.platform}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                </div>
            })}
        </div>
    )
}

export default Dashboard
