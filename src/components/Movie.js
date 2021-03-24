import React from 'react';
import { Link } from 'react-router-dom';

function Movie({ backdrop_path, title, poster_path, vote_average, id }) {
	const imgPath = `https://image.tmdb.org/t/p/w1280/${
		poster_path || backdrop_path
	}`;
	return (
		<>
			<section className='movie'>
				<div className='movie__top'>
					<Link to={`/movie/${id}`}>
						<img src={imgPath} alt={title} className='movie__img' />
					</Link>
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
