import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Footer, Home, Library, Category, Search, SideBar, CTA } from "./scenes"
import { Header } from "./components"

const App = () => (
	<Router>
		<div id='app' className='text-white flex space-x-3 h-full'>
			<SideBar />
			<main id='app-main' className='bg-neutral-900 w-8/12 rounded-lg relative'>
				<Header />
				<Routes>
					<Route exact path='/' element={<Home />} />

					<Route path='/category' element={<Category />} />

					<Route path='/search' element={<Search />} />

					<Route path='/library' element={<Library />} />
				</Routes>
				<Footer />
			</main>
			<CTA />
		</div>
	</Router>
)

export default App
