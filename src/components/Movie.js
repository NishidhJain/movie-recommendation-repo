import React from 'react';

function Movie({ backdrop_path, title, poster_path, vote_average, mb }) {
	const imgPath = 'https://image.tmdb.org/t/p/w1280/';
	return (
		<>
			<section className='movie'>
				<div className='movie__top'>
					<img
						src={`${imgPath}${poster_path || backdrop_path}`}
						alt={title}
						className='movie__img'
					/>
				</div>
				<div className='movie__bottom'>
					<h4 className='movie__title'>{title}</h4>
					<div className='movie__rating'>{vote_average}</div>
				</div>
				{/* {mb && <div className='movie__marginBottom'></div>} */}
			</section>
		</>
	);
}

export default Movie;
