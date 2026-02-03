// About Page Component
// This page provides information about the app and developer
function About() {
  return (
    <div className="container">
      <h1>About This Application</h1>
      
      <div className="about-content">
        <h2>The Project</h2>
        <p>
          This is a beginner-friendly React application designed to help you understand 
          the fundamentals of modern web development with React and Vite.
        </p>

        <h2>Technology Stack</h2>
        <p>
          This project is built using:
        </p>
        <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem', lineHeight: '2' }}>
          <li><strong>React</strong> - A JavaScript library for building user interfaces</li>
          <li><strong>Vite</strong> - A fast build tool and development server</li>
          <li><strong>React Router</strong> - For handling navigation between pages</li>
          <li><strong>CSS</strong> - For styling and responsive design</li>
        </ul>

        <h2>The Developer</h2>
        <p>
          This application was created as a learning project for beginners who want to 
          understand how to build React applications from scratch. It follows best 
          practices and uses clean, readable code.
        </p>

        <p>
          The goal is to provide a solid foundation that you can build upon and expand 
          with your own features and creativity!
        </p>
      </div>
    </div>
  )
}

export default About
