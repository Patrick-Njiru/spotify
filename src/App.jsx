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
	SleepMusic,
} from "./scenes"
import { Header } from "./components"

const App = () => (
	<Router>
		<div id='app' className='text-white flex space-x-3 h-full'>
			<SideBar />
			<main id='app-main' className='bg-neutral-900 rounded-lg relative overflow-hidden w-2/3 lg:w-3/4 hover:overflow-y-auto'>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/category' element={<Category />} />
					<Route path='/search' element={<Search />} />
					<Route path='/library' element={<Library />} />
					<Route path='/podcasts' element={<Podcasts />} />
					<Route path='/sleep-music' element={<SleepMusic />} />
				</Routes>
				<Footer />
			</main>
			<CTA />
		</div>
	</Router>
)

export default App
