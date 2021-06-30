import React, {useState} from 'react';


export const AddTeam = ({setTeams}) => {

    const [inputValue, setInputValue] = useState('hola')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setTeams( tem => [...tem, inputValue]);
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