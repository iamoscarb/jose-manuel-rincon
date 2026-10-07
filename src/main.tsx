import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { JoseManuelApp } from './JoseManuelApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JoseManuelApp />
  </StrictMode>,
)
