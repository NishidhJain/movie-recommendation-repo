import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieProvider } from './context/Context';
import Dashboard from './pages/Dashboard';
import SearchMovie from './pages/SearchMovie';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SingleMovie from './pages/SingleMovie';

function App() {
	return (
		<MovieProvider>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Dashboard />
					</Route>
					<Route path='/movie/:id'>
						<SingleMovie />
					</Route>
					<Route path='/search'>
						<SearchMovie />
					</Route>
					<Route path='/signin'>
						<SignIn />
					</Route>
					<Route path='/signup'>
						<SignUp />
					</Route>
				</Switch>
			</Router>
		</MovieProvider>
	);
}

export default App;
