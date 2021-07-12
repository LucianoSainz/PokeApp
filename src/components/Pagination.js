import React from 'react';
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';


const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props

    return(
        <div className='pagination'>
            <button onClick = {onLeftClick}>
                <div className='left'><FaArrowLeft /></div>
            </button>
            <div className='number'>{page} de {totalPages}</div>
            <button onClick = {onRightClick}>
                <div className='rigth'><FaArrowRight /></div>
            </button>
        </div>
       
    )
}

export default Pagination;