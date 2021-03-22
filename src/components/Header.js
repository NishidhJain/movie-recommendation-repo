import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className='header'>
			<h1 className='header__logo'>Moviestan</h1>

			<nav className='header__nav'>
				<ul className='header__list'>
					<li className='header__listItem'>
						<Link to='/search' className='header__link'>
							Search
						</Link>
					</li>
					<li className='header__listItem'>
						<Link to='/profile' className='header__link'>
							Profile
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
