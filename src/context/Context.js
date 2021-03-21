import { createContext, useContext, useState } from 'react';

const MovieContext = createContext();

const APIKey = process.env.REACT_APP_API_KEY;
const imgEndPoint = 'https://image.tmdb.org/t/p/w1280/';
const searchMovieEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${APIKey}&language=en-US&query=`;

// making custom hook, instead of this we can directly pass MovieContext and use it using useConetext(MovieContext)
export const useTheme = () => {
	return useContext(MovieContext);
};

// we are creating the provider and exporting it
export function MovieProvider({ children }) {
	const [movies, setMovies] = useState([]);

	const searchMovie = async (movieName) => {
		const searchAPI = `${searchMovieEndPoint}${movieName}`;

		const findMovie = await fetch(searchAPI);
		const jsonMovie = await findMovie.json();

		console.log('Search response : ', jsonMovie);
	};

	return (
		<MovieContext.Provider value={{ movies, searchMovie }}>
			{children}
		</MovieContext.Provider>
	);
}

// Search API
// https://api.themoviedb.org/3/search/movie?api_key={key}&language=en-US&query=name&page=1&include_adult=false

// Img API
// https://image.tmdb.org/t/p/w1280/{posterPath}
