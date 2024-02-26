import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {
	Footer,
	Home,
	Library,
	Category,
	Search,
	SideBar,
	CTA,
	Podcasts,
	Playlists,
} from "./scenes"
import { Header } from "./components"

const App = () => (
	<Router>
		<div id='app' className='relative text-white flex space-x-3 h-full'>
			<SideBar />
			<main id='app-main' className='bg-neutral-900 rounded-lg relative overflow-hidden w-2/3 hover:overflow-y-auto'>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/category' element={<Category />} />
					<Route path='/search' element={<Search />} />
					<Route path='/library' element={<Library />} />
					<Route path='/playlists' element={<Playlists />} />
					<Route path='/podcasts' element={<Podcasts />} />
				</Routes>
				<Footer />
			</main>
			<CTA />
		</div>
	</Router>
)

export default App
