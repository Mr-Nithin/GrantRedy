import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// Fonts are bundled with the site (no Google Fonts request); Latin subset, only the weights used
import '@fontsource/outfit/latin-600.css'
import '@fontsource/outfit/latin-700.css'
import '@fontsource/outfit/latin-800.css'
import '@fontsource/dm-sans/latin-400.css'
import '@fontsource/dm-sans/latin-500.css'
import '@fontsource/dm-sans/latin-600.css'
import './styles/style.css'

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
const root = document.getElementById('root')

// Pages are pre-rendered at build time: hydrate that HTML instead of re-rendering from scratch
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
