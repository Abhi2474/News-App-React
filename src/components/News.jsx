import React from 'react'
import { Link } from 'react-router-dom'

const News = ({ item }) => {
	return (
		<>
			{
				item.urlToImage ?
					<section className='border-black border py-2 px-2 h-auto rounded-lg mb-10 '>
						<div className='font-bold mb-3 text-xl'>{item.title}</div>
						<div className='mb-3 text-sm italic'> Author: {item.author ? item.author : 'N.A'}</div>
						<img className='rounded h-1/3 w-full' src={item.urlToImage ? item.urlToImage : ''} alt="" />
						<div className='my-2'>{item.description} </div>
						<span className='underline hover:text-red-900 hover:font-bold'><Link to={item.url} target='_blank'>Read more...</Link></span>
					</section>
					: ''
			}
		</>
	)
}

export default News