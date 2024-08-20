import PropTypes from "prop-types"
import { Outlet } from "react-router-dom"
import { CTA, Footer, Header, SideBar } from "../scenes"
import { Modal, SmallModal } from "../components"

const RootLayout = ({ handleSearch, modalDisplay, setModalDisplay }) => {
	return (
		<div id='app' className='relative text-white flex space-x-3 h-full'>
			<SideBar setModalDisplay={setModalDisplay} />
			<main
				id='app-main'
				className='bg-neutral-900 rounded-lg relative overflow-hidden mb-2 hover:overflow-y-auto'
			>
				<Modal modalDisplay={modalDisplay.modal} setModalDisplay={setModalDisplay} />
				<SmallModal
					modalDisplay={modalDisplay.smallModal}
					setModalDisplay={setModalDisplay}
				/>
				<Header onSearch={handleSearch} setModalDisplay={setModalDisplay} />
				<Outlet />
				<Footer setModalDisplay={setModalDisplay} />
			</main>
			<CTA setModalDisplay={setModalDisplay} />
		</div>
	)
}

RootLayout.propTypes = {
	handleSearch: PropTypes.func.isRequired,
	modalDisplay: PropTypes.object.isRequired,
	setModalDisplay: PropTypes.func.isRequired,
}

export default RootLayout
