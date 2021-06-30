import React, {useState} from 'react';
import  PropTypes  from 'prop-types';


export const AddTeam = ({setTeams}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

     if(inputValue.trim().length > 2) {
        setTeams( tem => [...tem, inputValue]);
        setInputValue('');
     }

      
    }

    return (
        <form onSubmit={handleSubmit}>
        <input 
         type='text'
         value={inputValue}
         onChange={handleInputChange}
         />
        </form>
    )
}

AddTeam.propTypes = {
    setTeams:PropTypes.func.isRequired
}