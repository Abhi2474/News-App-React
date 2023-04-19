import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
			<div className='bg-green-100 py-4 '>
				<ul className='flex justify-around underline font-bold text-lg '>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/business'>Business</Link></li>
					<li><Link to='/about'>About</Link></li>
				</ul>
			</div>

		</>

	)
}

export default Navbar
