import { FC } from 'react'
import './App.scss'
import Header from "./components/Header/Header.tsx";
import {Route, Routes} from "react-router";
import ErrorPage from "./pages/ErrorPage.tsx";
import HomePage from "./pages/HomePage.tsx";

const App: FC = () => {


  return (
    <div>
      <Header />

      <Routes>
        <Route path="/"  element={<HomePage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
