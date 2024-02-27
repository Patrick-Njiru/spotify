import PropTypes from "prop-types"

const PodcastCard = ({ category, image }) => {
	return (
		<div className='mb-8 w-48 relative bg-white rounded-xl'>
			<img src={image} alt={category} className="w-full rounded-xl" />
			<h1 className='absolute top-4 start-4 font-bold text-xl'>{category}</h1>
		</div>
	)
}

PodcastCard.propTypes = {
	category: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

export default PodcastCard
