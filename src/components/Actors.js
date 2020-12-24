import React from 'react';
import { actors } from '../data';

const Actors = () => {

  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

function renderActors() {
  return actors.map(act =>{
     return (<div>
       <p> <b>Name: {act.name}</b> </p>
       Movies:<ul>
        {act.movies.map(movie => {
          return (
            <li>{movie}</li>
          )
        })
        
        }
        </ul>
       
         
       
     </div>)
 })
}


export default Actors;
