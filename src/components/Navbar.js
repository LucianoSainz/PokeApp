import React from 'react';
import {FaHeart}  from 'react-icons/fa';
import FavoriteContext from '../contexts/favoriteContex';

const {useContext} = React;


const Navbar = () => {

    const {favoritePokemons} = useContext(FavoriteContext);

    let imgUrl = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png';
    return(
        <nav>
            <div />
                <div>
            <img src= {imgUrl} alt='pokeapi-logo' className='logo-img'/>
                </div>
               <div className='poke-fav'>&#10084;&#65039; {favoritePokemons.length}</div>
        </nav>
    )
}

export default Navbar;