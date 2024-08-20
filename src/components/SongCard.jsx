import PropTypes from "prop-types"
import { BiPlay } from "react-icons/bi"

const SongCard = ({ title, description, image }) => {
	return (
		<div className='group p-3 relative rounded-lg w-48 shadow-md bg-neutral-800 cursor-pointer bg-gradient-to-b from-neutral-900 hover:to-0% hover:bg-neutral-700'>
			<div className='transition-all invisible duration-200 absolute end-5 top-32 group-hover:top-28 group-hover:visible'>
				<BiPlay className='text-5xl p-1 ps-2 bg-green-500 rounded-full fill-black hover:ps-1 hover:pe-0' />
			</div>
			<div className='flex flex-col'>
				<img src={image} alt={title} className='rounded-lg h-40 mb-3' />
				<h3 className='font-bold capitalize truncate'>{title}</h3>
				<p className='text-gray-400 text-sm'>{description}</p>
			</div>
		</div>
	)
}

SongCard.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.any.isRequired,
}

export default SongCard
