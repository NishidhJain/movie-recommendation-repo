import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/Context';
import { BiTime } from 'react-icons/bi';

function SingleMovie() {
	// const API_KEY = process.env.REACT_APP_API_KEY;
	const { id } = useParams();
	const { getSingleMovie, movie } = useContext(MovieContext);
	// const [movie, setMovie] = useState({});
	// const getMovieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
	const imgURL = 'https://image.tmdb.org/t/p/w1280/';

	useEffect(() => {
		getSingleMovie(id);
	}, [id]);

	// const getSingleMovie = async () => {
	// 	try {
	// 		const searchRequest = await fetch(getMovieAPI);
	// 		const searchJSON = await searchRequest.json();
	// 		console.log(searchJSON);
	// 		setMovie(searchJSON);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// };
	// getSingleMovie();

	return (
		<>
			{movie !== null && (
				<section className='singleMovie'>
					<div className='singleMovie__left'>
						<img
							src={`${imgURL}${movie.poster_path || movie.backdrop_path}`}
							alt={movie.title}
							className='singleMovie__img'
						/>
					</div>
					<div className='singleMovie__right'>
						<h2 className='singleMovie__title'>
							{movie.title || movie.original_title}
						</h2>
						<div className='singleMovie__runtime'>
							<BiTime className='singleMovie__icon' />
							<p className='singleMovie__duration'>{movie.runtime}</p>
						</div>
					</div>
				</section>
			)}
		</>
	);
}

export default SingleMovie;
