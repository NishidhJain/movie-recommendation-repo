import React, { useContext } from 'react';
import { MovieContext } from '../context/Context';
import { IoPlay } from 'react-icons/io5';
import { AiOutlineStar } from 'react-icons/ai';

function BannerMovie() {
	const imgPath = 'https://image.tmdb.org/t/p/w1280/';
	const { bannerMovie, updateWatchedMovies } = useContext(MovieContext);

	const genres = [
		{
			id: 28,
			name: 'Action',
		},
		{
			id: 12,
			name: 'Adventure',
		},
		{
			id: 16,
			name: 'Animation',
		},
		{
			id: 35,
			name: 'Comedy',
		},
		{
			id: 80,
			name: 'Crime',
		},
		{
			id: 99,
			name: 'Documentary',
		},
		{
			id: 18,
			name: 'Drama',
		},
		{
			id: 10751,
			name: 'Family',
		},
		{
			id: 14,
			name: 'Fantasy',
		},
		{
			id: 36,
			name: 'History',
		},
		{
			id: 27,
			name: 'Horror',
		},
		{
			id: 10402,
			name: 'Music',
		},
		{
			id: 9648,
			name: 'Mystery',
		},
		{
			id: 10749,
			name: 'Romance',
		},
		{
			id: 878,
			name: 'Science Fiction',
		},
		{
			id: 10770,
			name: 'TV Movie',
		},
		{
			id: 53,
			name: 'Thriller',
		},
		{
			id: 10752,
			name: 'War',
		},
		{
			id: 37,
			name: 'Western',
		},
	];

	const handleWatchClick = () => {
		// console.log(bannerMovie.id);
		updateWatchedMovies(bannerMovie?.id, bannerMovie);
	};

	const getGenresName = () => {
		return bannerMovie?.genre_ids?.map((value) => {
			const genreName = genres.find((item) => item.id === value);
			// console.log(genreName);
			return genreName;
		});
	};

	const genresList = getGenresName();
	// console.log(genresList);

	// console.log(bannerMovie);
	return (
		<section className='banner'>
			<div className='banner__left'>
				<img
					src={`${imgPath}${
						bannerMovie?.poster_path || bannerMovie?.backdrop_path
					}`}
					alt={bannerMovie?.title}
					className='banner__img'
				/>
			</div>
			<div className='banner__right'>
				<div className='banner__top'>
					<h2 className='banner__title'>{bannerMovie?.title}</h2>
					<div className='banner__ratingBox'>
						<AiOutlineStar className='banner__icon' />
						<p className='banner__ratings'>{bannerMovie?.vote_average}</p>
					</div>
				</div>
				<p className='banner__description'>{bannerMovie?.overview}</p>
				<div className='banner__genres'>
					{genresList?.map((item) => (
						<p key={item.id} className='banner__genre'>
							{item.name}
						</p>
					))}
				</div>
				<button className='banner__btn' onClick={handleWatchClick}>
					<IoPlay className='banner__playIcon' />
					Watch Movie
				</button>
			</div>
		</section>
	);
}

export default BannerMovie;
