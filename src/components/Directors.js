import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

function renderDirectors() {
  return (
     directors.map(director => {
        return (
          <div>
            <p><b>Name: {director.name}</b></p>
            Movies: <ul>
              {director.movies.map(movie => {
                return (
                  <li>{movie}</li>
                )
              })}
            </ul>
          </div>
        )
     })
  )
}

export default Directors
