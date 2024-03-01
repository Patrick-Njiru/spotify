import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Modal = ({ modalDisplay, setModalDisplay }) => {
	return (
		<div
			className={
				modalDisplay +
				" z-20 fixed start-2/5 top-40 bg-blue-600 p-4 w-80 rounded-xl shadow-2xl shadow-slate-800"
			}
		>
			<h1 className='text-lg'>Create Playlist</h1>
			<p className='text-sm'>Log in to create and share playlists.</p>
			<div className='flex justify-end items-center space-x-3 mt-6'>
				<button
					className='text-gray-400 font-extrabold hover:text-gray-300'
					onClick={() => setModalDisplay({ modal: "hidden", smallModal: "hidden" })}
				>
					Not now
				</button>
				<NavLink
					to='/login'
					className='text-gray-950 bg-white rounded-full p-2 px-4 font-bold hover:font-extrabold hover:shadow-lg hover:bg-slate-100'
				>
					Log in
				</NavLink>
			</div>
		</div>
	)
}

Modal.propTypes = {
	modalDisplay: PropTypes.string.isRequired,
	setModalDisplay: PropTypes.func.isRequired,
}

export default Modal
