import React, {useState, useEffect} from 'react';
import Navbar  from './components/Navbar';
import PokeRes from './components/PokeRes';
import SearchBar from './components/SearchBar';
import { getPokemonData, getPokemons } from './api';




 export default function PokeApp() {

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState();
    const [total, setTotal] = useState();
     const [loading, setLoading] = useState(true);

    const fetchgetPokemons = async () => {
        try{
            const data = await getPokemons();
             const promises = data.results.map(async (pokemon) => {
                 return await getPokemonData(pokemon.url);
             })
             const results = await Promise.all(promises)
             setPokemons(results);
             setLoading(false);
        } catch (err){

        }

    }

    useEffect(() => {
       fetchgetPokemons();
    }, [])

   return(
       <div>
           <Navbar />
       <div className='PokeApp'>
           <SearchBar />
           { loading ? 
           <div>Cargando Pokemones...</div>
           :
           <PokeRes pokemons={pokemons} />
           }
       </div>
       </div>
   ) 
}

