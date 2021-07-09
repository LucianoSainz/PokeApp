import React, {useState, useEffect} from 'react';
import Navbar  from './components/Navbar';
import PokeRes from './components/PokeRes';
import SearchBar from './components/SearchBar';
import { getPokemonData, getPokemons } from './api';




 export default function PokeApp() {

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
     const [loading, setLoading] = useState(true);

    const fetchgetPokemons = async () => {
        try{
            const data = await getPokemons(25, 25 * page);
             const promises = data.results.map(async (pokemon) => {
                 return await getPokemonData(pokemon.url);
             })
             const results = await Promise.all(promises)
             setPokemons(results);
             setLoading(false);
             setTotal(Math.ceil(data.count / 25))
        } catch (err){

        }

    }

    useEffect(() => {
       fetchgetPokemons();
    }, [page])

   return(
       <div>
           <Navbar />
       <div className='PokeApp'>
           <SearchBar />
           { loading ? 
           <div>Cargando Pokemones...</div>
           :
           <PokeRes pokemons={pokemons} 
             page={page}
             setPage={setPage}
             total={total}
           />
           }
       </div>
       </div>
   ) 
}

