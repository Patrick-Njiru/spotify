import { FaChevronRight } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { podcastData } from "../../data"
import { Card } from "../../components"

const Podcasts = () => {
	return (
		<section className='relative bg-gradient-to-b from-green-700 to-40%'>
			<h1 className='text-8xl font-extrabold bg-gradient-to-b from-emerald-700 to-emerald-900 pt-14 pb-6 mb-8 ps-6 '>
				Podcasts
			</h1>
			<h1 className='ps-6 mt-12 mb-1 text-2xl font-bold'>Categories</h1>
			<div className='px-6 flex flex-wrap justify-between'>
				{podcastData.map((podcast, index) => (
					<Card key={index} podcast={podcast} />
				))}
			</div>
			<NavLink
				to='/podcasts/categories'
				className='bg-zinc-800 p-2 ms-6 rounded-full text-sm hover:underline hover:bg-zinc-700'
			>
				See all categories <FaChevronRight className='inline ms-1' />
			</NavLink>
		</section>
	)
}

export default Podcasts
