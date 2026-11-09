import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeContext'
import App from './App.jsx'
import './styles/global.css'

// GitHub Pages SPA fallback: restore deep link after 404.html redirect
try {
  const redirect = sessionStorage.getItem('spa-redirect')
  if (redirect) {
    sessionStorage.removeItem('spa-redirect')
    const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')
    window.history.replaceState(null, '', `${base}${redirect}`)
  }
} catch {
  /* ignore */
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
