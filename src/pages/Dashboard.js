import React from 'react';
import BannerMovie from '../components/BannerMovie';
import Header from '../components/Header';
import Movies from '../components/Movies';

function Dashboard() {
	return (
		<div className='dashboard'>
			<Header />
			<BannerMovie />
			<Movies />
		</div>
	);
}

export default Dashboard;
