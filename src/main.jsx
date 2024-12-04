import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PaletteProvider } from './components/PaletteContext'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaletteProvider>
      <App />
    </PaletteProvider>
  </StrictMode>,
)
