import React, { useState } from 'react';
import '../css/Search.css';
import { FaSearch } from 'react-icons/fa';

function Search() {
	const [searchInpt, setSearchInpt] = useState('');

	const handleChange = (e) => {
		setSearchInpt(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(searchInpt);
		setSearchInpt('');
	};

	return (
		<div className='search'>
			<form onSubmit={handleSubmit} className='search__form'>
				<input
					type='text'
					placeholder='Search...'
					className='search__inpt'
					value={searchInpt}
					onChange={handleChange}
				/>
				<button className='search__btn'>
					<FaSearch />
				</button>
			</form>
		</div>
	);
}

export default Search;
