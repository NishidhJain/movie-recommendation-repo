import { createContext, useState, useEffect } from 'react';

const MovieContext = createContext();

const APIKey = process.env.REACT_APP_API_KEY;
// const imgEndPoint = 'https://image.tmdb.org/t/p/w1280/';
const searchMovieEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=`;
const popularMoviesAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKey}&language=en-US&page=1`;
const trendingMovieAPI = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKey}`;
const getMovieAPI = `https://api.themoviedb.org/3/movie/`;

// const getRecommendedMovies = `https://api.themoviedb.org/3/movie/{movie_id}/recommendations?api_key=${APIKey}&language=en-US&page=1`;

// we are creating the provider and exporting it
function MovieProvider({ children }) {
	const [popularMovies, setPopularMovies] = useState([]);
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [recommendedMovies, setRecommendedMovies] = useState([]);
	const [similarMovies, setSimilarMovies] = useState([]);
	const [bannerMovie, setBannerMovie] = useState({});
	const [searchResponse, setSearchResponse] = useState([]);
	const [movie, setMovie] = useState({});
	// let recMoviesList = [];
	// const [isLoading, setIsLoading] = useState(true);
	const [watchedMovies, setWatchedMovies] = useState([315635]);
	const [watchedMoviesObject, setWatchedMoviesObject] = useState([
		{
			backdrop_path: '/tTlAA0REGPXSZPBfWyTW9ipIv1I.jpg',
			id: 315635,
			original_title: 'Spider-Man: Homecoming',
			poster_path: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
			title: 'Spider-Man: Homecoming',
			vote_average: 7.4,
		},
	]);

	useEffect(() => {
		async function fetchMovies() {
			try {
				const request = await fetch(popularMoviesAPI);
				const response = await request.json();
				setPopularMovies(response?.results);
				setBannerMovie(
					response?.results[
						Math.floor(Math.random() * response?.results.length - 1)
					]
				);
			} catch (err) {
				console.log(err);
			}
		}

		// const getRecommendation = async (id) => {
		// 	const recommendEndPoint = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${APIKey}&language=en-US&page=1`;

		// 	try {
		// 		const recMovies = await fetch(recommendEndPoint);
		// 		const jsonRecMovies = await recMovies.json();
		// 		console.log(jsonRecMovies);
		// 		setRecommendedMovies(jsonRecMovies.results);
		// 	} catch (err) {
		// 		console.log('err in fetching recommended movie : ', err);
		// 	}
		// };

		fetchMovies();
		// getRecommendation(20359);
	}, []);

	useEffect(() => {
		async function fetchTrendingMovies() {
			try {
				const request = await fetch(trendingMovieAPI);
				const response = await request.json();
				setTrendingMovies(response?.results);
			} catch (err) {
				console.log(err);
			}
		}

		fetchTrendingMovies();
	}, []);

	useEffect(() => {
		watchedMovies.forEach((movieId) => {
			getRecForWatchedMovies(movieId);
		});
	}, []);

	// useEffect to check the updated recommended movies array
	// useEffect(() => {
	// 	console.log(
	// 		'Recommended Movies Array in side useEffect:',
	// 		recommendedMovies
	// 	);
	// }, [recommendedMovies]);

	const getRecForWatchedMovies = async (id) => {
		// console.log(`Inside getRecForWatchedMovies for id ${id}`);
		const recommendEndPoint = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${APIKey}&language=en-US&page=1`;

		try {
			const recMovies = await fetch(recommendEndPoint);
			const jsonRecMovies = await recMovies.json();

			if (jsonRecMovies.results.length === 0) {
				console.log('Sorry, No Recommendations found!!');
				console.log('Recommended Movies Array : ', recommendedMovies);
				return;
			}

			const topFiveRecMovies = jsonRecMovies.results.slice(0, 5);
			// console.log(`Top 5 rec movies for id ${id}: `, topFiveRecMovies);

			// recMoviesList = [...topFiveRecMovies, ...recMoviesList];
			// console.log('RecMOVIESLIST : ', recMoviesList);

			// console.log('Recommended Movies Array : ', recommendedMovies);

			// let newRecMovies = recommendedMovies.concat(topFiveRecMovies);
			let newRecMovies = topFiveRecMovies.concat(recommendedMovies);
			// console.log('New Rec Movies', newRecMovies);
			setRecommendedMovies(newRecMovies);
			// console.log(`setRecommendedMovies called for ${id}`);

			// setRecommendedMovies(jsonRecMovies.results);
			// setRecommendedMovies(recMoviesList);
		} catch (err) {
			console.log('err in fetching recommended movie : ', err);
		}
	};

	const searchMovie = async (movieName) => {
		const searchAPI = `${searchMovieEndPoint}${movieName}`;

		try {
			const findMovie = await fetch(searchAPI);
			const jsonMovie = await findMovie.json();
			console.log('Search response : ', jsonMovie);
			setSearchResponse(jsonMovie.results);
		} catch (err) {
			console.log('err in searching movie', err);
		}
	};

	const getSingleMovie = async (id) => {
		// setIsLoading(false);
		try {
			const searchRequest = await fetch(
				`${getMovieAPI}${id}?api_key=${APIKey}&language=en-US`
			);
			const searchJSON = await searchRequest.json();
			// console.log(searchJSON);
			setMovie(searchJSON);
			// setIsLoading(false);
		} catch (err) {
			console.log(err);
		}
	};
	// console.log(trendingMovies);

	const getSimilarMovies = async (movieID) => {
		const similarMovie = `https://api.themoviedb.org/3/movie/${movieID}/similar?api_key=${APIKey}&language=en-US&page=1`;

		try {
			const similarResponse = await fetch(similarMovie);
			const similarMovieJSON = await similarResponse.json();
			// console.log('Similar Movies : ', similarMovieJSON);
			// console.log('Similar Movies : ', similarMovieJSON.results);
			setSimilarMovies(similarMovieJSON.results.slice(0, 10));
		} catch (err) {
			console.log('Error in fetching similar movies : ', err);
		}
	};

	const updateWatchedMoviesObjects = (movieName) => {
		const data = {
			backdrop_path: movieName.backdrop_path,
			id: movieName.id,
			original_title: movieName.original_title,
			poster_path: movieName.poster_path,
			title: movieName.title,
			vote_average: movieName.vote_average,
		};
		console.log('Inside updateWatchedMoviesObjects', data);
		// setWatchedMoviesObject([...watchedMoviesObject, data]);
		setWatchedMoviesObject([data, ...watchedMoviesObject]);
	};

	const updateWatchedMovies = (newMovie, movieObj) => {
		// console.log('Inside updateWatched Movies', movieObj);
		const isWatched = watchedMovies.includes(newMovie);

		// if user has not watched movie previously
		if (!isWatched) {
			const updatedMovies = [...watchedMovies, newMovie];
			console.log('Updated watched movies are : ', updatedMovies);
			updateWatchedMoviesObjects(movieObj);
			setWatchedMovies(updatedMovies);
			getRecForWatchedMovies(newMovie);
			alert('Thanks for watching!!');
		} else {
			console.log(
				`You have watched this movie previously having id : ${newMovie}`
			);
		}
	};

	// console.log('updateWatchedMoviesObjects are ', watchedMoviesObject);

	// console.log('Trending Movies : ', trendingMovies);
	// console.log('Recommended Movies : ', recommendedMovies);

	return (
		<MovieContext.Provider
			value={{
				bannerMovie,
				popularMovies,
				trendingMovies,
				searchMovie,
				searchResponse,
				getSingleMovie,
				movie,
				recommendedMovies,
				updateWatchedMovies,
				getSimilarMovies,
				similarMovies,
				watchedMoviesObject,
			}}
		>
			{children}
		</MovieContext.Provider>
	);
}

export { MovieProvider, MovieContext };

// Search API
// https://api.themoviedb.org/3/search/movie?api_key={key}&language=en-US&query=name&page=1&include_adult=false

// Img API
// https://image.tmdb.org/t/p/w1280/{posterPath}
