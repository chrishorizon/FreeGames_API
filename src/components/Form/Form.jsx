import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const Form = () => {
    const [info, setInfo] = useState({
        category: "pc"
    })

    const history = useHistory();

    const submitHandler = (e) => {
        const data = {...info}
        e.preventDefault();
        data.category === "pc" ? history.push(`/pc`) : history.push(`/browser`)
    }
    
    return (
        <div>
            <form action={submitHandler}>
                <select name="category" onChange={e => setInfo({...info, category: e.target.value})}>
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
