import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Footer, Home, Library, Category, Search, SideBar } from './scenes'
import './App.css'

const App = () => (
    <Router>
        <div className="text-white-50 d-flex" style={{background: 'rgb(0, 0, 0, 1)'}}>
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
        </div>
    </Router>
)

export default App