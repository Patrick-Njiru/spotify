import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
	Footer,
	Home,
	Categories,
	Search,
	SideBar,
	CTA,
	Podcasts,
	Playlists,
	LogIn,
	SignUp,
	Header,
} from "./scenes"
import { searchData } from "./data"
import { Modal, SmallModal } from "./components"

const App = () => {
	const [updatedData, setUpdatedData] = useState(searchData)
	const [modalDisplay, setModalDisplay] = useState({
		modal: "hidden",
		smallModal: "hidden"
	})

	const handleSearch = (string) => {
		setUpdatedData(
			searchData.filter((value) => value.toLowerCase().includes(string.toLowerCase()))
		)
	}

	return (
		<Router>
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
					<Routes>
						<Route
							exact
							path='/'
							element={<Home setModalDisplay={setModalDisplay} />}
						/>
						<Route
							path='/search'
							element={
								<Search
									updatedData={updatedData}
									setModalDisplay={setModalDisplay}
								/>
							}
						/>
						<Route
							path='/playlists'
							element={<Playlists setModalDisplay={setModalDisplay} />}
						/>
						<Route
							path='/podcasts'
							element={<Podcasts setModalDisplay={setModalDisplay} />}
						/>
						<Route
							path='/podcasts/categories'
							element={<Categories setModalDisplay={setModalDisplay} />}
						/>
						<Route
							path='/login'
							element={<LogIn setModalDisplay={setModalDisplay} />}
						/>
						<Route
							path='/signup'
							element={<SignUp setModalDisplay={setModalDisplay} />}
						/>
					</Routes>
					<Footer setModalDisplay={setModalDisplay} />
				</main>
				<CTA setModalDisplay={setModalDisplay} />
			</div>
		</Router>
	)
}

export default App
