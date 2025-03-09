
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Find the root element
const rootElement = document.getElementById("root");

// Ensure the element exists before rendering
if (rootElement) {
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found! Check if the HTML has a div with id 'root'");
}
