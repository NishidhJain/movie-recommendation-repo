import './App.css';
import { MovieProvider } from './context/Context';

function App() {
	return (
		<MovieProvider>
			<div className='app'>Movie Recommendar</div>
		</MovieProvider>
	);
}

export default App;
