import React, {useState} from 'react';
import {searchPokemon} from '../api';
import {FaSistrix}  from 'react-icons/fa';


const SearchBar = () => {

const [search, setSearch] = useState('');
const [pokemon, setPokemon] = useState();

const handleChange = (e) =>{
    setSearch(e.target.value);
}

const handleClick = async (e) => {
   const data =  await searchPokemon(search);
    setPokemon(data);

}

    return (
        <div className='searchbar-container'>
        <div className='searchbar'>
            <input type='text' placeholder='buscar pokemon...'
             onChange={handleChange} />
        </div>
        <div className='searchbar-btn'>
            <button onClick={handleClick}><FaSistrix /></button>
        </div>
        <div>

        </div>
        </div>
    )
}


export default SearchBar;