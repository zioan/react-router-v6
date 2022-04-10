import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './components/Blog'
import BlogSection from './components/BlogSection'
import Data from './pages/Data'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* Render single component */}
        <Route exact path='/' element={<Home />} />

        {/* Render multiple components */}
        <Route
          path='/blog'
          element={
            <>
              <Blog />
              <BlogSection />
            </>
          }
        />
        <Route path='/data' element={<Data />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
