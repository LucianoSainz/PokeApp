import React, {useState} from 'react';


const SearchBar = () => {

const [search, setSearch] = useState('');

const handleChange = (e) =>{
    setSearch(e.target.value);
}

const handleClick = (e) => {
   console.log('Apretando boton');
}

    return (
        <div>
        <div>
            <input type='text' placeholder='buscar pokemon'
             onChange={handleChange} />
        </div>
        <div>
            <button onClick={handleClick}>Buscar</button>
        </div>
        </div>
    )
}


export default SearchBar;