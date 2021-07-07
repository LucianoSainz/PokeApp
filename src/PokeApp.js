import React, {useState, useEffect} from 'react';
import Navbar  from './components/Navbar';
import PokeRes from './components/PokeRes';
import SearchBar from './components/SearchBar';
import { getPokemons } from './api';



 export default function PokeApp() {

    const [pokemons, setPokemons] = useState([]);

    const fetchgetPokemons = async () => {
        try{
            const data = await getPokemons();
             setPokemons(data.results);
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

