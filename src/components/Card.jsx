import PropTypes from "prop-types"

const Card = ({ podcast, title }) => {
	const randomColorGenerator = `rgba(${Math.ceil(Math.random() * 254)}, ${Math.ceil(
		Math.random() * 254
	)}, ${Math.ceil(Math.random() * 254)})`
	return (
		<div
			className='mb-8 w-48 h-48 relative rounded-xl cursor-pointer shadow-lg'
			style={{ background: randomColorGenerator }}
		>
			<h1 className='absolute top-4 start-3 end-3 font-bold text-2xl capitalize'>
				{podcast || title}
			</h1>
		</div>
	)
}

Card.propTypes = {
	podcast: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

Card.defaultProps = {
	podcast: "",
	title: "",
}

export default Card
