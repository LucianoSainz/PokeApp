import React from 'react';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';


const Pagination = (props) => {

    const {onLeftClick, onRigthClick, page, totalPages} = props

    return(
        <div className='pagination'>
            <button onClick={onLeftClick}>
                <div><FaArrowLeft /></div>
            </button>
            <div className='number'>{page} de {totalPages}</div>
            <button onClick={onRigthClick}>
                <div><FaArrowRight /></div>
            </button>
        </div>
    )
}

export default Pagination;