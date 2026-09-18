import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Always land on Home (top) on a fresh load / reload — don't restore the
// previous scroll position or jump to a "#section" hash left in the URL.
// (Clicking nav links still scrolls to sections normally.)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}
if (window.location.hash) {
  history.replaceState(null, '', window.location.pathname + window.location.search)
}
window.scrollTo(0, 0)
window.addEventListener('load', () => window.scrollTo(0, 0))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
