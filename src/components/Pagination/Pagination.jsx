import React from 'react'

const Pagination = ({ postPerPage, totalPosts}) => {
    const pageNumbers = [];

    for(let i = 1; i < Math.floor(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(number => (
                    <li>
                        <a href="!#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Pagination
