import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.scss'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

import "./assets/fonts/abel.woff"
import "./assets/fonts/abel.woff2"
import "./assets/fonts/cygre-book.woff"
import "./assets/fonts/cygre-book.woff2"
import "./assets/fonts/akony.woff"
import "./assets/fonts/akony.woff2"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
