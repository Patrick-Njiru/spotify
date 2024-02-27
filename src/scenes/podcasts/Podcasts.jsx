import { FaChevronRight } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { PodcastData } from "../../data"
import { Card } from "../../components"

const Podcasts = () => {
	return (
		<section className='relative bg-gradient-to-b from-green-700 to-40%'>
			<h1 className='text-8xl font-extrabold bg-gradient-to-b from-emerald-700 to-emerald-900 pt-14 pb-6 mb-8 ps-6 '>
				Podcasts
			</h1>
			<div className='px-6 flex flex-wrap justify-between'>
				{PodcastData.map((item) => (
					<Card key={item.id} {...item} />
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
