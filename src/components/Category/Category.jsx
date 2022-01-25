import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import Pagination from '../../components/Pagination/Pagination'
import './category.css'

const Category = () => {

    const {category} = useParams();
    const [cat, setCat] = useState([]); // variable to hold data from category params
    const [loading, setLoading] = useState(true) // default loading variable to true

    const [currentPage, setCurrentPage] = useState(1); // page number
    const [postPerPage] = useState(50); // number of values rendered per page

    useEffect(() => {
        axios.get(`https://www.freetogame.com/api/games?category=${category}&sort-by=alphabetical`)
        .then(res => {
            console.log(res.data)
            setLoading(false)
            setCat(res.data)
        })
        .catch(err => console.log(err))
    }, [category])

    if (loading) return "Loading...";

    // Get current posts
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = cat.slice(indexOfFirstPost, indexOfLastPost)

    // Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            <h1 className='allGames__category-title' >{category.charAt(0).toUpperCase() + category.slice(1)} Games</h1>
            <div className='allGames__category_container'>
            {
                currentPosts.map((c, idx) => {
                    return <div key={idx}>

                        <section className='allGames__container-cards_category'>
                            <div className="allGames__container-cards_img">
                                <a href={c.game_url} className='allGames__container-url'>
                                    <img src={c.thumbnail} alt="image" />
                                </a>
                                <div className="allGames__container-cards_title">
                                    <a href={c.game_url} className='allGames__container-url'>
                                        <h2>{c.title}</h2>
                                    </a>
                                    <p>Free</p>
                                    <div className="allGames__container-cards_description">
                                        <p>{c.short_description}</p>
                                        <div className="allGames__container-cards_genre">
                                            <p>{c.genre}</p>
                                            <p>{c.platform}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                })
            }
            </div>
            <Pagination 
                postPerPage={postPerPage} 
                totalPosts={cat.length} 
                paginate={paginate} 
            />
        </>
    )
}

export default Category
