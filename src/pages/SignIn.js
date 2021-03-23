import React from 'react';
import { Link } from 'react-router-dom';

function SignIn() {
	return (
		<div class='signin'>
			<div className='signin__box'>
				<h2 className='signin__heading'>Sign In</h2>
				<form className='signin__form'>
					<div className='signin__inptField'>
						<label for='email' className='signin__label'>
							Email
						</label>
						<input
							id='email'
							type='email'
							required
							className='signin__input'
							placeholder='e.g, abc@gmail.com'
						/>
					</div>

					<div className='signin__inptField'>
						<label for='password' className='signin__label'>
							Password
						</label>
						<input
							id='password'
							type='password'
							required
							className='signin__input'
							placeholder='Enter your password...'
						/>
					</div>

					<button type='submit' className='signin__btn'>
						Sign In
					</button>
				</form>
				<p className='signin__newUser'>
					Don't have an account?{' '}
					<Link to='/signup' className='signin__link'>
						Sign Up
					</Link>
				</p>
			</div>
		</div>
	);
}

export default SignIn;
