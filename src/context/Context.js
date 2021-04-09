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
	const [bannerMovie, setBannerMovie] = useState({});
	const [searchResponse, setSearchResponse] = useState([]);
	const [movie, setMovie] = useState({});
	// const [isLoading, setIsLoading] = useState(true);

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

		async function fetchTrendingMovies() {
			try {
				const request = await fetch(trendingMovieAPI);
				const response = await request.json();
				setTrendingMovies(response?.results);
			} catch (err) {
				console.log(err);
			}
		}

		const getRecommendation = async (id) => {
			const recommendEndPoint = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${APIKey}&language=en-US&page=1`;

			try {
				const recMovies = await fetch(recommendEndPoint);
				const jsonRecMovies = await recMovies.json();
				console.log(jsonRecMovies);
				setRecommendedMovies(jsonRecMovies.results);
			} catch (err) {
				console.log('err in fetching recommended movie : ', err);
			}
		};

		fetchTrendingMovies();
		fetchMovies();
		getRecommendation(20359);
	}, []);

	// console.log(popularMovies);
	// console.log('Trending Movies : ', trendingMovies);

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
