import { Link, useLocation } from 'react-router-dom'

// Navbar Component
// This component shows the navigation menu on all pages
function Navbar() {
  // useLocation hook gives us the current URL path
  // We use this to highlight the active page
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo/Brand name */}
        <Link to="/" className="nav-logo">
          My React App
        </Link>

        {/* Navigation links */}
        <ul className="nav-menu">
          <li>
            {/* If current path is "/", add "active" class */}
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
