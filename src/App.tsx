import { FC } from 'react'
import {ErrorPage, FaqPage, HomePage, ProcessingPersonalDataPage} from "./pages/index.js.ts";
import {Header} from "./components"
import {Navigate, Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {pageConfig} from "./config/pages.config.ts";
import './App.scss'

const App: FC = () => {


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path={pageConfig.home}  element={<HomePage />} />
        <Route path={pageConfig.faq} element={<FaqPage />} />
        <Route path={pageConfig.processing_personal_data} element={<ProcessingPersonalDataPage />} />

        <Route path={pageConfig.error404} element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="babushka/dist/404/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
