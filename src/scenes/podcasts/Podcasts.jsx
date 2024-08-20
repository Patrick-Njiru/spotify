import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { FaChevronRight } from "react-icons/fa"
import { Card } from "../../components"
import { podcastData } from "../../data"

const Podcasts = ({ setModalDisplay }) => (
	<section
		onClick={() => setModalDisplay({ modal: "hidden", smallModal: "hidden" })}
		className='relative bg-gradient-to-b from-green-700 to-40%'
	>
		<h1 className='text-8xl font-extrabold bg-gradient-to-b from-emerald-700 to-emerald-900 pt-14 pb-6 mb-8 ps-6 '>
			Podcasts
		</h1>
		<h1 className='ps-6 mt-12 mb-1 text-2xl font-bold'>Categories</h1>
		<div className='px-6 grid grid-cols-3 gap-8'>
			{podcastData.map((podcast, index) => (
				<Card key={index} podcast={podcast} />
			))}
		</div>
		<NavLink
			to='/podcasts/categories'
			className='bg-zinc-800 inline-block p-2 mt-8 ms-6 rounded-full text-sm hover:underline hover:bg-zinc-700'
		>
			See all categories <FaChevronRight className='inline ms-1' />
		</NavLink>
	</section>
)

Podcasts.propTypes = { setModalDisplay: PropTypes.func.isRequired }

export default Podcasts
