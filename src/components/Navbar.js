import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart}  from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
    return(
        <nav>
            <div />
                <div>
            <img src= {imgUrl} alt='pokeapi-logo' className='logo-img'/>
                </div>
               <h2><FontAwesomeIcon icon={ faHeart } /></h2>
        </nav>
    )
}

export default Navbar;