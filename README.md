# My React App - Beginner Project

A simple, beginner-friendly React application built with Vite. This project demonstrates the basics of React, routing, and component structure.

## 🚀 Quick Start

Follow these steps to run the application on your computer:

### Prerequisites
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation & Running

1. **Open Terminal/Command Prompt** in this project folder

2. **Install Dependencies**
   ```bash
   npm install
   ```
   This will download all the required packages (React, Vite, React Router, etc.)

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **View in Browser**
   - Open your browser
   - Go to `http://localhost:5173`
   - You should see your React app running! 🎉

### Other Commands

- **Build for Production**
  ```bash
  npm run build
  ```

- **Preview Production Build**
  ```bash
  npm run preview
  ```

## 📁 Project Structure

```
src/
 ├── components/
 │   └── Navbar.jsx          # Navigation bar component
 ├── pages/
 │   ├── Home.jsx            # Home page
 │   ├── About.jsx           # About page
 │   └── Contact.jsx         # Contact page with form
 ├── App.jsx                 # Main app component with routing
 ├── main.jsx                # Entry point
 └── index.css               # Global styles
```

## 📚 What's Inside

### Pages
- **Home** - Welcome page with introduction
- **About** - Information about the app and technology used
- **Contact** - Contact form (frontend only, no backend)

### Features
- ✅ Multi-page navigation with React Router
- ✅ Responsive design (works on mobile and desktop)
- ✅ Clean, commented code for beginners
- ✅ Form handling with React state
- ✅ Active page highlighting in navigation

## 🎓 Learning Points

This project covers:
1. **React Functional Components** - Modern way to write React
2. **React Hooks** - useState for managing component state
3. **React Router** - Navigation between pages
4. **Props** - Passing data between components
5. **Event Handling** - Forms and user interactions
6. **CSS Styling** - Basic responsive design

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Routing
- **JavaScript** - Programming language
- **CSS** - Styling

## 📝 File Explanations

### `index.html`
The HTML template. Contains a `<div id="root">` where React renders.

### `src/main.jsx`
Entry point. Renders the App component into the DOM.

### `src/App.jsx`
Main component. Sets up routing and includes the Navbar.

### `src/components/Navbar.jsx`
Navigation bar component. Shows on all pages.

### `src/pages/Home.jsx`
Home page component with welcome message.

### `src/pages/About.jsx`
About page with information about the project.

### `src/pages/Contact.jsx`
Contact page with a working form (frontend only).

### `src/index.css`
All the CSS styles for the application.

## 🎨 Customization Ideas

Want to practice? Try these:
- Change colors in `index.css`
- Add a new page (e.g., Services, Portfolio)
- Add images to the pages
- Create a Footer component
- Add more form fields to the Contact page
- Style the active navigation differently

## 🤝 Need Help?

- Check the comments in each file
- Read the React documentation: https://react.dev
- Read the Vite documentation: https://vitejs.dev

## 📄 License

This project is open source and available for learning purposes.

---

**Happy Coding! 🚀**
