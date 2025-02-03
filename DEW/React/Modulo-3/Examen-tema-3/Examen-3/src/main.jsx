import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PassData from './PassData.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PassData />
  </StrictMode>,
)