// Home Page Component
// This is the landing page of our application
function Home() {
  return (
    <div className="container">
      {/* Welcome section with main heading */}
      <div className="welcome-section">
        <h1>Welcome to My React App! 👋</h1>
        <p>This is a beginner-friendly React application built with Vite.</p>
      </div>

      {/* Introduction section */}
      <div className="intro-section">
        <h2>About This Project</h2>
        <p>
          This is a simple multi-page React application that demonstrates the basics of:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
          <li>React functional components</li>
          <li>React Router for navigation</li>
          <li>Component structure and organization</li>
          <li>Basic CSS styling</li>
        </ul>
        <p>
          Feel free to explore the different pages using the navigation menu above!
        </p>
      </div>
    </div>
  )
}

export default Home
