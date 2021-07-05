import React, {useState} from 'react';
import Navbar  from './components/Navbar';
import SearchBar from './components/SearchBar';



 export default function PokeApp() {
   return(
       <div>
           <Navbar />
       <div className='PokeApp'>
           <SearchBar />
       </div>
       </div>
   ) 
}

