import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Categories, Search, Podcasts, Playlists, LogIn, SignUp, Error404 } from "./scenes"
import { searchData } from "./data"
import RootLayout from "./layouts/RootLayout"

const App = () => {
	const [updatedData, setUpdatedData] = useState(searchData)
	const [modalDisplay, setModalDisplay] = useState({
		modal: "hidden",
		smallModal: "hidden",
	})

	const handleSearch = (string) => {
		setUpdatedData(
			searchData.filter((value) => value.toLowerCase().includes(string.toLowerCase()))
		)
	}

	return (
		<Router>
			<Routes>
				<Route
					element={
						<RootLayout
							modalDisplay={modalDisplay}
							handleSearch={handleSearch}
							setModalDisplay={setModalDisplay}
						/>
					}
				>
					<Route
						index
						exact
						path=''
						element={<Home setModalDisplay={setModalDisplay} />}
					/>
					<Route
						path='/search'
						element={
							<Search updatedData={updatedData} setModalDisplay={setModalDisplay} />
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
					<Route path='*' element={<Error404 setModalDisplay={setModalDisplay} />} />
				</Route>
				<Route path='/login' element={<LogIn setModalDisplay={setModalDisplay} />} />
				<Route path='/signup' element={<SignUp setModalDisplay={setModalDisplay} />} />
			</Routes>
		</Router>
	)
}

export default App
