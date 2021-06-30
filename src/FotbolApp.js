import React, {useState} from 'react';
import { AddTeam } from './components/AddTeam';


const FotbolApp = () => {

 
   const[Teams, setTeams] = useState(['Real Madrid', 'Juventus', 'Liverpool']);
   
   //const handlerAdd = () => {
    //setTeams (['Real Madrid', 'Juventus', 'Liverpool']);
    // setTeams( tem => ['Sevilla', ...tem]);
   //}


   return(
       <>
       <h2>FotbolApp</h2>
       <AddTeam setTeams={ setTeams } />
       <hr />

      
       <ol>
           {
               Teams.map(Team => {
                   return <li key={Team}>{Team}</li>
               })
           }
       </ol>
       </>
   ) 
}

export default FotbolApp;