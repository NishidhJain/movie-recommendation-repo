import './App.css';
import Movies from './components/Movies';

function App() {
	return (
		<div className='app'>
			<Movies />
		</div>
	);
}

export default App;

// API Key
// e8c83f7123dd47102c59318c8f456d8d

// Search API
// https://api.themoviedb.org/3/search/movie?api_key={key}&language=en-US&query=name&page=1&include_adult=false

// Img API
// https://image.tmdb.org/t/p/w1280/{posterPath}
