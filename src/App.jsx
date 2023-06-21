import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home, MusicCategory, SideBar } from './containers'


function App() {

  return (
    <Router>
        <div className="">
            <SideBar />

            <Routes>
                <Route exact path='' element={<Home />} />

                <Route path='/category' element={<MusicCategory />} />
            </Routes>
        </div>
    </Router>
  )
}

export default App