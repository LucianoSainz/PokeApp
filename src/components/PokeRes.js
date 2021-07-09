import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const PokeRes = (props) => {
    const {pokemons, page, setPage, total, loading} = props;

     const lastPage = () => {
       const nextPage = Math.max(page - 1, 0);
       setPage(nextPage)
     }

     const nextPage= () => {
        const nextPage = Math.min(page + 1, total);
          setPage(nextPage)
     }


    return(
        <div>
            <div className="header">
                <h1>Pokemons</h1>
            </div>

             {loading ?
             <div>Cargando Pokemones...</div>:

             <div className='pokeRes-grid'>
                 {
                     pokemons.map((pokemon, idx) => {
                         return (
                             <Pokemon pokemon={pokemon} key={pokemon.name} />
                         )
                     })
                     
                 }
             
             </div>
             }
        
             <Pagination 
               page={page + 1}
               totalPages={total}
               onLeftClick={lastPage}
               onRightClick={nextPage}
             />
        </div>
    )
}

export default PokeRes;