import React, {useState} from 'react';


const SearchBar = () => {

const [search, setSearch] = useState('');

const handleChange = (e) =>{
    setSearch(e.target.value);
}

    return (
        <div>
        <div>
            <input type='text' placeholder='buscar pokemon'
             onChange={handleChange} />
        </div>
        <div>{search}</div>
        </div>
    )
}


export default SearchBar;