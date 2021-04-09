import React, { useContext } from 'react';
import { MovieContext } from '../context/Context';
import Movie from './Movie';

function MovieRow({ moviesList }) {
	// console.log(trendingMovies);
	return (
		<section className='movies__row'>
			<div className='movies__gradient'></div>
			{moviesList?.map((movie) => (
				<Movie key={movie.id} {...movie} />
			))}
		</section>
	);
}

function Movies() {
	const { trendingMovies, recommendedMovies } = useContext(MovieContext);
	return (
		<section className='movies'>
			<h2 className='movies__rowTitle'>Trending Movies</h2>
			<MovieRow moviesList={trendingMovies} />
			<h2 className='movies__rowTitle'>Recommended Movies</h2>
			<MovieRow moviesList={recommendedMovies} />
		</section>
	);
}

export default Movies;
