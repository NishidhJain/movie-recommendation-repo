import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieProvider } from './context/Context';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
	return (
		<MovieProvider>
			<Router>
				<Switch>
					<Route path='/' exact>
						<Dashboard />
					</Route>
					<Route path='/signin' exact>
						<SignIn />
					</Route>
					<Route path='/signup' exact>
						<SignUp />
					</Route>
				</Switch>
			</Router>
			<div className='app'>Movie Recommendar</div>
		</MovieProvider>
	);
}

export default App;
