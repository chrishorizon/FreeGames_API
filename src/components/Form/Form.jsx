import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import "./form.css"

const Form = () => {
    
    const [category, setCategory] = useState();

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault() // to prevent submitting request
        // Send user to /pc or /browser
        category == "all" ? history.push('/') : history.push(`/games/${category}`)
    }
    
    return (
        <div className='form__nav-container'>
            <div className='form__nav'>
                <h1>Free Games List</h1>
                <form onSubmit={submitHandler}>
                    <select name="category" onChange={e => setCategory(e.target.value)}>
                        <option value="all">--Select Category--</option>
                        <option value="all">All</option>
                        <option value="action-rpg">Action RPG</option>
                        <option value="action">Action</option>
                        <option value="anime">Anime</option>
                        <option value="battle-royale">Battle Royal</option>
                        <option value="card">Card</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="fighting">Fighting</option>
                        <option value="flight">Flight</option>
                        <option value="horror">Horror</option>
                        <option value="mmorpg">MMORPG</option>
                        <option value="mmo">MMO</option>
                        <option value="mmofps">MMOFPS</option>
                        <option value="mmotps">MMOTPS</option>
                        <option value="moba">MOBA</option>
                        <option value="shooter">Shooter</option>
                        <option value="strategy">Strategy</option>
                        <option value="sports">Sports</option>
                        <option value="social">Social</option>
                        <option value="survival">Survival</option>
                        <option value="space">Space</option>
                        <option value="tower-defense">Tower Defense</option>
                        <option value="zombie">Zombie</option>
                    </select>
                    <button>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Form
