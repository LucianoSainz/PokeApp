import React, {useState, useEffect} from 'react';
import Navbar  from './components/Navbar';
import PokeRes from './components/PokeRes';
import SearchBar from './components/SearchBar';
import { getPokemonData, getPokemons } from './api';
import { FavoriteProvider } from './contexts/favoriteContex';




 export default function PokeApp() {

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorite] = useState(['raichu']);

    const fetchgetPokemons = async () => {
        try{
            setLoading(true)
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


    const updateFavoritePokemons = (name) => {
        const updated = [...favorites];
       const isFavorite = updated.indexOf(name);
       if(isFavorite >= 0) {
          updated.splice(isFavorite, 1);
       } else {
           updated.push(name);
       }
       setFavorite(updated);
    }

   return(
       <FavoriteProvider value={{
           favoritePokemons: favorites,
            updateFavoritePokemons: updateFavoritePokemons}}>
       <div>
           <Navbar />
       <div className='PokeApp'>
           <SearchBar />
           <PokeRes 
            loading={loading}
           pokemons={pokemons} 
             page={page}
             setPage={setPage}
             total={total}
           />
           
       </div>
       </div>
       </FavoriteProvider>
   ) 
}

