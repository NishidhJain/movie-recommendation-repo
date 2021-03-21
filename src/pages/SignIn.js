import React from 'react';

function SignIn() {
	return (
		<div class='signin'>
			<div className='signin__box'>
				<h2 className='signin__heading'>Sign In</h2>
				<form className='signin__form'>
					<label for='email' className='signin__label'>
						Email
					</label>
					<input
						type='email'
						required
						className='signin__input'
						placeholder='e.g, abc@gmail.com'
					/>

					<label for='email' className='signin__label'>
						Password
					</label>
					<input
						type='password'
						required
						className='signin__input'
						placeholder='Enter your password...'
					/>

					<button type='submit'>Sign In</button>
				</form>
				<p className='signin__newUser'>
					Don't have an account? <span>Sign Up</span>
				</p>
			</div>
		</div>
	);
}

export default SignIn;
