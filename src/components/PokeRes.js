import React from 'react';

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
                             <div> #{idx + 1} : {pokemon.name}</div>
                         )
                     })
                     
                 }
             </div>
        </div>
    )
}

export default PokeRes;