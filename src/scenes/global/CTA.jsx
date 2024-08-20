import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const CallToAction = ({ setModalDisplay }) => (
	<section
		onClick={() => setModalDisplay({ modal: "hidden", smallModal: "hidden" })}
		id='cta'
		className='absolute -bottom-20 -left-3 right-0  p-2 px-4 flex justify-between items-center space-x-2'
	>
		<div className='text-white font-medium me-2'>
			<p className='text-sm'>Preview of Spotify</p>
			<p className=''>
				Sign up to get unlimited songs and podcasts with occassional ads. No credit card
				needed.
			</p>
		</div>
		<NavLink
			to='/sign-up'
			id='btn-cta'
			className='bg-white text-black px-6 py-3 pt-4 font-semibold rounded-full min-w-40 hover:bg-slate-100 hover:font-extrabold'
		>
			Sign up for free
		</NavLink>
	</section>
)

CallToAction.propTypes = { setModalDisplay: PropTypes.func.isRequired }

export default CallToAction
