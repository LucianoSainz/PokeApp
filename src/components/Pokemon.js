import React, { useContext } from 'react';
import {FaHeart}  from 'react-icons/fa';
import FavoriteContext from '../contexts/favoriteContex';



const Pokemon = (props) => {
    const {pokemon} = props;

    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext);

    const redHeart = '❤️';
    const whiteHeart ='🤍';
    const heart = favoritePokemons.includes(pokemon.name) ? redHeart : whiteHeart;
    
    const clickHeart = (e) => {
       e.preventDefault();
       updateFavoritePokemons(pokemon.name);
    }

    return(
        <div className='pokemon-card'>
            <div className='pokemon-img-container'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className='pokemon-img' />
            </div>
               <div className='card-body'>
                   <div className='top'>
                        <h3>{pokemon.name}</h3>
                         <div>#{pokemon.id}</div>
                                                
                    </div>
                 <div className='card-bottom'>
                     <div className='poke-type'>
                         {
                             pokemon.types.map((type, idx) => {
                                 return <div key={idx} className='poke-text'> {type.type.name}</div>; 
                                 
                             })}
                     </div>
                     <button onClick={clickHeart}>
                     <div>{heart}</div>
                     </button>
                 </div>
            </div>
        </div>

       
    )
}

export default Pokemon;