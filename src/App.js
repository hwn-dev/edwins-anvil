import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Welcome from './pages/Welcome'
import About from './pages/About'

import PageHeader from './components/PageHeader'

import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
        <Link to='/'>
          <PageHeader />
        </Link>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
