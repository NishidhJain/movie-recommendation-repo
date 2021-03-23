import React, { useContext } from 'react';
import { MovieContext } from '../context/Context';
import SearchBox from '../components/SearchBox';
import Movie from '../components/Movie';

function SearchMovie() {
	const { searchResponse } = useContext(MovieContext);

	// console.log(searchResponse);
	return (
		<section className='searchMovie'>
			<h2 className='searchMovie__title'>Search Movies</h2>
			<SearchBox />
			{searchResponse.length > 1 && (
				<section className='searchMovie__results'>
					{searchResponse.map(
						(movie) =>
							(movie.backdrop_path || movie.poster_path) && (
								<Movie key={movie.id} {...movie} mb />
							)
					)}
				</section>
			)}
		</section>
	);
}

export default SearchMovie;
