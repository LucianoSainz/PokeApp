import React, {useState, useEffect} from 'react';
import Navbar  from './components/Navbar';
import PokeRes from './components/PokeRes';
import SearchBar from './components/SearchBar';
import { getPokemonData, getPokemons } from './api';



 export default function PokeApp() {

    const [pokemons, setPokemons] = useState([]);

    const fetchgetPokemons = async () => {
        try{
            const data = await getPokemons();
             console.log(data.results);
             const promises = data.results.map(async (pokemon) => {
                 return await getPokemonData(pokemon.url);
             })
             const results = await Promise.all(promises)
             setPokemons(results);
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
           <PokeRes pokemons={pokemons} />
       </div>
       </div>
   ) 
}

