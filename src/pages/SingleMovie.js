import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/Context';
import { BiTime, BiCalendar } from 'react-icons/bi';
import { IoPlay } from 'react-icons/io5';
import { AiOutlineStar } from 'react-icons/ai';

function SingleMovie() {
	// const API_KEY = process.env.REACT_APP_API_KEY;
	// const [movie, setMovie] = useState({});
	// const getMovieAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

	const { id } = useParams();
	const { getSingleMovie, movie, updateWatchedMovies } = useContext(
		MovieContext
	);
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

	const handleWatchClick = () => {
		// console.log(`Clicked Watch for movie ${id}`);
		updateWatchedMovies(id);
	};

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
						<h3 className='singleMovie__tagline'>{movie.tagline}</h3>
						<div className='singleMovie__ratingBox'>
							<AiOutlineStar className='singleMovie__icon' />
							<p className='singleMovie__ratings'>{movie.vote_average}</p>
						</div>
						<div className='singleMovie__runtime'>
							<BiTime className='singleMovie__icon' />
							<p className='singleMovie__duration'>{movie.runtime} minutes</p>
						</div>
						<div className='singleMovie__release'>
							<BiCalendar className='singleMovie__icon' />
							<p className='singleMovie__releaseDate'>{movie.release_date}</p>
						</div>
						<div className='singleMovie__genres'>
							{movie?.genres?.map((genre) => (
								<p className='singleMovie__genre' key={genre.id}>
									{genre.name}
								</p>
							))}
						</div>
						<p className='singleMovie__overview'>{movie.overview}</p>
						<button className='singleMovie__btn' onClick={handleWatchClick}>
							<IoPlay className='singleMovie__playIcon' />
							Watch Movie
						</button>
						{/* <div className='singleMovie__companies'>
							{movie?.production_companies?.map((company) => (
								<img
									key={company.id}
									src={`${imgURL}${company.logo_path}`}
									alt={company.name}
									className='singleMovie__companyLogo'
								/>
							))}
						</div> */}
					</div>
				</section>
			)}
		</>
	);
}

export default SingleMovie;
