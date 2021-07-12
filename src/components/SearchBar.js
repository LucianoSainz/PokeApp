import React, {useState} from 'react';
import {searchPokemon} from '../api';
import {FaSistrix}  from 'react-icons/fa';


const SearchBar = (props) => {
const {onSearch} = props;

const [search, setSearch] = useState('');


const handleChange = (e) =>{
    setSearch(e.target.value);
    if(e.target.value.length === 0) {
        onSearch(null);
    }
};

const handleClick = async (e) => {
  onSearch(search);

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
        
        
        </div>
    )
}


export default SearchBar;