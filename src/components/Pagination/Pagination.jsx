import React from 'react'

const Pagination = ({ postPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i = 1; i < Math.floor(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className='pagination justify-content-center my-3'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href="#" className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Pagination
