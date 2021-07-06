import React from 'react';
import {FaHeart}  from 'react-icons/fa';


const Navbar = () => {
    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
    return(
        <nav>
            <div />
                <div>
            <img src= {imgUrl} alt='pokeapi-logo' className='logo-img'/>
                </div>
               <h2><FaHeart /></h2>
        </nav>
    )
}

export default Navbar;