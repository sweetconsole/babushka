import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/styles/fonts.scss"
import './assets/styles/reset.scss'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";

import "./assets/fonts/abel.woff"
import "./assets/fonts/abel.woff2"
import "./assets/fonts/сygre-bold.woff"
import "./assets/fonts/сygre-bold.woff2"
import "./assets/fonts/cygre-book.woff"
import "./assets/fonts/cygre-book.woff2"
import "./assets/fonts/rubik.woff"
import "./assets/fonts/rubik.woff2"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
