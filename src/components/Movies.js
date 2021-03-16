import React, { useState } from 'react';
import '../css/Movies.css';
import Movie from './Movie';
import Search from './Search';

function Movies() {
	const [movies, setMovies] = useState([]);
	const APIKey = 'e8c83f7123dd47102c59318c8f456d8d';

	const searchMovie = async (movieName) => {
		const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=${movieName}&page=1&include_adult=false`;

		const fetchMovies = await fetch(searchAPI);
		const jsonData = await fetchMovies.json();

		console.log('Results', jsonData.results);
		setMovies(jsonData.results);
	};

	// console.log(movies);

	return (
		<div className='movies'>
			<Search searchMovie={searchMovie} />

			{movies.map((movie) => (
				<Movie key={movie.id} {...movie} />
			))}
		</div>
	);
}

export default Movies;
