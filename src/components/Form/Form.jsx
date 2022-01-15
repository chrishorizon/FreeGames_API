import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Form = () => {
    
    const [category, setCategory] = useState();

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault() // to prevent submitting request
        // Send user to /pc or /browser
        history.push(`/${category}`)
    }
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <select name="category" onChange={e => setCategory(e.target.value)}>
                    <option value="">All</option>
                    <option value="pc">PC</option>
                    <option value="browser">Browser</option>
                </select>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Form
