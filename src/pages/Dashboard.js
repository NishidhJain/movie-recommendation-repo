import React from 'react';
import BannerMovie from '../components/BannerMovie';
import Header from '../components/Header';

function Dashboard() {
	return (
		<div className='dashboard'>
			<Header />
			<BannerMovie />
		</div>
	);
}

export default Dashboard;
