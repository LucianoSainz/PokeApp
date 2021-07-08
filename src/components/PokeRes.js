import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const PokeRes = (props) => {
    const {pokemons} = props;
    return(
        <div>
            <div className="header">
                <h1>Pokemons</h1>
                
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
             <Pagination 
               page={1}
               totalPages={100}
               onLeftClick={console.log}
               onRigthClick={console.log}
             />
        </div>
    )
}

export default PokeRes;