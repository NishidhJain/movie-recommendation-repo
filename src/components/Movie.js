import React from 'react';

function Movie({ title, poster_path, vote_average }) {
	const imgURL = `https://image.tmdb.org/t/p/w1280/${poster_path}`;

	return (
		<div className='movie'>
			<h2 className='movie__title'>{title}</h2>
			<img src={imgURL} alt={title} className='movie__poster' />
			<p className='movie__rating'>{vote_average}</p>
		</div>
	);
}

export default Movie;
