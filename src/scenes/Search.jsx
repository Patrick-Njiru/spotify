import { NavLink } from "react-router-dom"
import { Card } from "../components"
// import PropTypes from 'prop-types'
import { searchData } from "../data"

const Search = () => {
	
	return (
		<section className='pt-2 px-6 bg-gradient-to-b from-neutral-800 to-70%'>
			<NavLink to='/podcasts/categories' className='text-xl font-bold block w-fit my-4 hover:underline'>
				Browse all
			</NavLink>
			<div className='flex flex-wrap justify-evenly md:justify-between'>
				{searchData.map((title, index) => (
					<Card key={index} title={title} />
				))}
			</div>
		</section>
	)
}

export default Search
