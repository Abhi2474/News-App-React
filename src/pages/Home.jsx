import React, { useEffect, useState } from 'react'
import { News } from '../components'

const Home = () => {
	const [data, setData] = useState([])
	const country = 'us'
	const category = ''

	useEffect(() => {
		fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=5d5b374b636c43cdb7812194f4b95267`)
			.then(res => res.json())
			.then(data => setData(data.articles))
	}, [])

	return (
		<>
			<div className='rounded grid grid-cols-3 gap-16 container mx-auto mt-4'>
				{
					data.map((item) => {
						return (
							<News key={Math.random()} item={item} />
						)
					})
				}
			</div>
		</>
	)
}

export default Home