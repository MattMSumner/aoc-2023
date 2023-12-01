import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { DayOne } from './DayOne'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/day_one">Day 1</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/day_one" element={<DayOne />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
