import { FC } from 'react'
import './App.scss'
import Header from "./components/Header/Header.tsx";
import {Route, Routes} from "react-router";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const App: FC = () => {


  return (
    <>
      <Header />

      <Routes>
        <Route path="babushka/dist/"  element={<HomePage />} />

        <Route path="babushka/dist/404" element={<ErrorPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
