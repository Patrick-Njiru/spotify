import PropTypes from "prop-types"

const Card = ({ category, image, title }) => {
	return (
		<div className='mb-8 w-48 relative bg-white rounded-xl cursor-pointer'>
			<img src={image} alt={category || title} className='w-full rounded-xl' />
			<h1 className='absolute top-4 start-4 font-bold text-xl'>{category || title}</h1>
		</div>
	)
}

Card.propTypes = {
	category: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
}

Card.defaultProps = {
	category: '',
	title: ''
}

export default Card
