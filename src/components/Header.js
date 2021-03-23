import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<h1 className='header__logo'>Moviestan</h1>

				<nav className='header__nav'>
					<ul className='header__list'>
						<li className='header__listItem'>
							<Link to='/search' className='header__link'>
								<FaSearch />
							</Link>
						</li>
						<li className='header__listItem'>
							<Link to='/profile' className='header__link'>
								Profile
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
