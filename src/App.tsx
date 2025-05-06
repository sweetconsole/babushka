import { FC } from 'react'
import {ErrorPage, FaqPage, HomePage} from "./pages/index.js.ts";
import Header from "./components/Header/Header.tsx";
import {Navigate, Route, Routes} from "react-router";
import './App.scss'

const App: FC = () => {


  return (
    <>
      <Header />

      <Routes>
        <Route path="babushka/dist/"  element={<HomePage />} />
        <Route path="babushka/dist/faq/" element={<FaqPage />} />

        <Route path="babushka/dist/404/" element={<ErrorPage />} />
        <Route path="*" element={<Navigate to="babushka/dist/404/" replace />} />
      </Routes>
    </>
  )
}

export default App
