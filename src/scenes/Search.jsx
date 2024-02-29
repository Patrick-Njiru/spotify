import PropTypes from "prop-types"
import { Card } from "../components"

const Search = ({ updatedData }) => (
	<section className='pt-2 px-6 bg-gradient-to-b from-neutral-800 to-70%'>
		<h1 className='text-xl font-bold my-4'>Browse all</h1>
		<div className='flex flex-wrap justify-evenly md:justify-between'>
			{updatedData.length > 0 ? (
				updatedData.map((title, index) => <Card key={index} title={title} />)
			) : (
				<h1 className='text-4xl text-center bg-neutral-800 w-full py-10 mx-auto'>
					Not found!
				</h1>
			)}
		</div>
	</section>
)

Search.propTypes = { updatedData: PropTypes.array.isRequired }

export default Search
