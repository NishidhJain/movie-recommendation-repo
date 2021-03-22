import React, { useContext } from 'react';
import { MovieContext } from '../context/Context';
import Movie from './Movie';

function MovieRow({ trendingMovies }) {
	// console.log(trendingMovies);
	return (
		<section className='movies__row'>
			<div className='movies__gradient'></div>
			{trendingMovies?.map((movie) => (
				<Movie key={movie.id} {...movie} />
			))}
		</section>
	);
}

function Movies() {
	const { trendingMovies } = useContext(MovieContext);
	return (
		<section className='movies'>
			<h2 className='movies__rowTitle'>Trending Movies</h2>
			<MovieRow trendingMovies={trendingMovies} />
		</section>
	);
}

export default Movies;
