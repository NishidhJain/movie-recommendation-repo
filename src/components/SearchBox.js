import React, { useContext, useState } from 'react';
import { MovieContext } from '../context/Context';
import { FaSearch } from 'react-icons/fa';

function SearchBox() {
	const [searchTerm, setSearchTerm] = useState('');

	const { searchMovie } = useContext(MovieContext);

	const handleChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(searchTerm);
		searchMovie(searchTerm);
		setSearchTerm('');
	};

	return (
		<div className='searchBox'>
			<form className='searchBox__form' onSubmit={handleSubmit}>
				<FaSearch className='searchBox__icon' />
				<input
					type='text'
					className='searchBox__input'
					placeholder='Search any movie...'
					onChange={handleChange}
					value={searchTerm}
				/>
				<button className='searchBox__btn' type='submit' disabled={!searchTerm}>
					Search
				</button>
			</form>
		</div>
	);
}

export default SearchBox;
