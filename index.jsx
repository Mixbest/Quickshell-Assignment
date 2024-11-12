import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import the main App component
import './styles/App.css'; // Import the global CSS styles

// This will render the App component inside the 'root' div in your index.html
ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App component is the root of your application */}
  </React.StrictMode>,
  document.getElementById('root') // This links to the 'root' div in the public/index.html file
);
