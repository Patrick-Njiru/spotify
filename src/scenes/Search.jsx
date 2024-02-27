import { Card } from "../components"
// import PropTypes from 'prop-types'
import { searchData } from "../data"

const Search = () => {
	return (
		<section className='pt-2 px-6 bg-gradient-to-b from-neutral-800 to-70%'>
			<h1 className='text-xl font-bold my-4'>Browse all</h1>
			<div className='flex flex-wrap justify-evenly md:justify-between'>
				{searchData.map((title, index) => (
					<Card key={index} title={title} />
				))}
			</div>
		</section>
	)
}

export default Search
