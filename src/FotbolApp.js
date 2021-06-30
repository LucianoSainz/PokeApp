import React, {useState} from 'react';
import { AddTeam } from './components/AddTeam';
import { TeamGrid } from './components/TeamGrid';


const FotbolApp = () => {

 
   const[Teams, setTeams] = useState(['Real Madrid']);
   
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
               Teams.map(Team => (
               <TeamGrid
                 key={Team}
                Team={Team} />
               ))
           }
       </ol>
       </>
   ) 
}

export default FotbolApp;