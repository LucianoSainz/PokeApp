import React, {useState} from 'react';



const FotbolApp = () => {

 
   const[players, setPlayers] = useState(['Messi', 'Ronaldo', 'Suarez']);
   
   const handlerAdd = () => {

       //setPlayers (['Kroos', ...players]);

       setPlayers( play => ['kroos', ...play]);
   }
   

   return(
       <>
       <h2>FotbolApp</h2>
       <hr />

       <button onClick = {handlerAdd}>Add</button>

       <ol>
           {
               players.map(player => {
                   return <li key={player}>{player}</li>
               })
           }
       </ol>
       </>
   ) 
}

export default FotbolApp;