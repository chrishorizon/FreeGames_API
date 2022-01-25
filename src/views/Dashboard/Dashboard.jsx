import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Pagination from '../../components/Pagination/Pagination'
import './dashboard.css'
import loadingImage from './loading.gif';


const Dashboard = () => {
    const [games, setGames] = useState([]); // set all game data to variable
    const [loading, setLoading] = useState(true); // loading variable true by default
    const [currentPage, setCurrentPage] = useState(1); // page number
    const [postPerPage] = useState(1000); // number of values rendered per page

    // Fetch API to render all games sorted by release date
    useEffect(() => {
        axios.get("https://www.freetogame.com/api/games?soft-by=release-date")
            .then(res => {
                console.log(res.data)
                setLoading(false)
                setGames(res.data)

                // let temp = games;
                // for(let ele of temp) {
                //     console.log(ele.genre);
                // }
            })
            .catch(err => console.log(err))
    }, [])

    if (loading) return (
        <img className='loadingImg' src={loadingImage} alt="loading" />
    )

    // Get current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = games.slice(indexOfFirstPost, indexOfLastPost)

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <div className='allGames__container'>
                {currentPosts.map((game, i) => {
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
                                    </div>
                                    <div className="allGames__container-cards_description">
                                        <p>{game.short_description}</p>
                                        <div className="allGames__container-cards_genre">
                                            <p>{game.genre}</p>
                                            <p>{game.platform}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                    </div>
                })}
            </div>
            <Pagination 
                postPerPage={postPerPage} 
                totalPosts={games.length} 
                paginate={paginate} 
            />
        </>
    )
}

export default Dashboard
