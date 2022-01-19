import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Form = () => {
    
    const [category, setCategory] = useState();

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault() // to prevent submitting request
        // Send user to /pc or /browser
        category == "all" ? history.push('/') : history.push(`/games/${category}`)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <select name="category" onChange={e => setCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="shooter">Shooter</option>
                    <option value="mmorpg">MMORPG</option>
                </select>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form
