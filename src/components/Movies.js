import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {renderMovies()}
    </div>
  );
};

function renderMovies(){
  return movies.map(movie =>{
    return (<div>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>Genres: 
          {movie.genres.map(genre =>{
            return (
              <li>{genre}</li>
            )
          })}
      </ul>
    </div>
    )
  })
}
export default Movies;
