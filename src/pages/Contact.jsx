import { useState } from 'react'

// Contact Page Component
// This page contains a simple contact form (frontend only, no backend)
function Contact() {
  // State to store form data
  // We use an object to store multiple form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  // State to show success message after form submission
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Handle input changes
  // This function updates the form data when user types
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent page reload
    
    // In a real app, you would send this data to a backend server
    // For now, we just log it to the console
    console.log('Form submitted:', formData)
    
    // Show success message
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>Have a question or want to get in touch? Fill out the form below!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Message field */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="btn-submit">
          Send Message
        </button>

        {/* Success message - only shows after form submission */}
        {isSubmitted && (
          <div className="success-message">
            Thank you! Your message has been received.
          </div>
        )}
      </form>
    </div>
  )
}

export default Contact
