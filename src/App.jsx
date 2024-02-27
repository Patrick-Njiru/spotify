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

const App = () => {
	return (
		<Router>
			<div id='app' className='relative text-white flex space-x-3 h-full'>
				<SideBar />
				<main
					id='app-main'
					className='bg-neutral-900 rounded-lg relative overflow-hidden w-2/3 mb-2 hover:overflow-y-auto'
				>
					<Header />
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/search' element={<Search />} />
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
