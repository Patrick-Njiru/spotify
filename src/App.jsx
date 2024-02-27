import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
	Footer,
	Home,
	Library,
	Categories,
	Search,
	SideBar,
	CTA,
	Podcasts,
	Playlists,
	LogIn,
	SignUp,
} from "./scenes"
import { Header } from "./components"

const App = () => (
	<Router>
		<div id='app' className='relative text-white flex space-x-3 h-full'>
			<SideBar />
			<main id='app-main' className='bg-neutral-900 rounded-lg relative overflow-hidden w-2/3 mb-2 hover:overflow-y-auto'>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/podcasts/categories' element={<Categories />} />
					<Route path='/search' element={<Search />} />
					<Route path='/library' element={<Library />} />
					<Route path='/playlists' element={<Playlists />} />
					<Route path='/podcasts' element={<Podcasts />} />
					<Route path='/signup' element={<SignUp />} />
					<Route path='/login' element={<LogIn />} />
				</Routes>
				<Footer />
			</main>
			<CTA />
		</div>
	</Router>
)

export default App
