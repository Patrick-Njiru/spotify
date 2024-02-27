import { NavLink } from "react-router-dom"
import { Card } from "../components"
import { searchData } from "../data"

const Search = () => {
	return (
		<section className='pt-2 px-6 relative bg-gradient-to-b from-neutral-800 to-70%'>
			<NavLink to='/podcasts/categories' className='text-xl font-bold block my-4 hover:underline'>
				Browse all
			</NavLink>
			<div className='flex flex-wrap justify-between'>
				{searchData.map((item) => (
					<Card key={item.id} {...item} />
				))}
			</div>
		</section>
	)
}

export default Search
