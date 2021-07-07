import React from 'react';
import {FaHeart}  from 'react-icons/fa';



const Pokemon = (props) => {
    const {pokemon} = props;
    return(
        <div className='pokemon-card'>
            <div className='pokemon-img'>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
               <div>
                   <div>
                        <h3>{pokemon.name}</h3>
                         <div>#{pokemon.id}</div>
                    </div>
                 <div>
                     <div>
                         {
                             pokemon.type.map((type, idx) => {
                                 return(
                                     <div key={idx}> {type.name}</div>
                                 )
                             })
                         }
                     </div>
                     <div><FaHeart /></div>
                 </div>
            </div>
        </div>

       
    )
}

export default Pokemon;