import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

// Main App component
// This is where we set up routing for our application
function App() {
  return (
    // BrowserRouter enables routing in our app
    <BrowserRouter>
      {/* Navbar appears on all pages */}
      <Navbar />
      
      {/* Routes defines which component to show for each URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
