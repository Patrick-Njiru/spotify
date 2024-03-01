import PropTypes from "prop-types"
import { BiMusic } from "react-icons/bi"

const SmallModal = ({ modalDisplay, setModalDisplay }) => {
	return (
		<div
			className={
				modalDisplay +
				" z-20 absolute start-1 top-52 bg-neutral-800 p-3 rounded shadow-sm shadow-slate-500 font-bold"
			}
			onClick={() => setModalDisplay({ modal: "", smallModal: "hidden" })}
		>
			<BiMusic className="text-xl inline me-2" /> Create a new playlist
		</div>
	)
}

SmallModal.propTypes = {
	modalDisplay: PropTypes.string.isRequired,
	setModalDisplay: PropTypes.func.isRequired,
}

export default SmallModal
