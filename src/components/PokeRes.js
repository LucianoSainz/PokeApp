import React from 'react';
import Pokemon from './Pokemon';

const PokeRes = (props) => {
    const {pokemons} = props;
    return(
        <div>
            <div className="header">
                <h1>Pokemons</h1>
                <div>Pagination</div>
            </div>
             <div className='pokeRes-grid'>
                 {
                     pokemons.map((pokemon, idx) => {
                         return (
                             <Pokemon pokemon={pokemon} key={pokemon.name} />
                         )
                     })
                     
                 }
             </div>
        </div>
    )
}

export default PokeRes;