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

const App = () => {
	const [updatedData, setUpdatedData] = useState(searchData)

	const handleSearch = (string) => {
		setUpdatedData(
			searchData.filter((value) => value.toLowerCase().includes(string.toLowerCase()))
		)
	}

	return (
		<Router>
			<div id='app' className='relative text-white flex space-x-3 h-full'>
				<SideBar />
				<main
					id='app-main'
					className='bg-neutral-900 rounded-lg relative overflow-hidden mb-2 hover:overflow-y-auto'
				>
					<Header onSearch={handleSearch} />
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/search' element={<Search updatedData={updatedData} />} />
						<Route path='/playlists' element={<Playlists />} />
						<Route path='/podcasts' element={<Podcasts />} />
						<Route path='/podcasts/categories' element={<Categories />} />
						<Route path='/login' element={<LogIn />} />
						<Route path='/signup' element={<SignUp />} />
					</Routes>
					<Footer />
				</main>
				<CTA />
			</div>
		</Router>
	)
}

export default App
