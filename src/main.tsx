import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NFTCard } from './NFTCard'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NFTCard />
  </StrictMode>,
)
