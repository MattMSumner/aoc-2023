import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink as Link,
} from 'react-router-dom'
import { DayOne } from './DayOne'
import { DayTwo } from './DayTwo'
import { DayThree } from './DayThree'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/day_one">Day 1</Link>
            </li>
            <li>
              <Link to="/day_two">Day 2</Link>
            </li>
            <li>
              <Link to="/day_three">Day 3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/day_one" element={<DayOne />} />
          <Route path="/day_two" element={<DayTwo />} />
          <Route path="/day_three" element={<DayThree />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
