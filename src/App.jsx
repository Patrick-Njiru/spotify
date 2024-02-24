import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { Footer, Home, Library, Category, Search, SideBar, CTA } from "./scenes"

const App = () => (
	<Router>
		<div id='app' className='text-white flex flex-wrap bg-zinc-950 p-2 pb-0 min-h-screen'>
			<SideBar />
			<div>
				<Routes>
					<Route exact path='' element={<Home />} />

					<Route path='/category' element={<Category />} />

					<Route path='/search' element={<Search />} />

					<Route path='/library' element={<Library />} />
				</Routes>
				<Footer />
			</div>
			<CTA />
		</div>
	</Router>
)

export default App
