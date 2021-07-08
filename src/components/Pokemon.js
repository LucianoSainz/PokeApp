import React from 'react';
import {FaHeart}  from 'react-icons/fa';



const Pokemon = (props) => {
    const {pokemon} = props;
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
                     <div className='poke-fav'><FaHeart /></div>
                 </div>
            </div>
        </div>

       
    )
}

export default Pokemon;