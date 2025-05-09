import { FC } from "react"
import { ErrorPage, FaqPage, HomePage, ProcessingPersonalDataPage } from "./pages/index.js.ts"
import { Header } from "./components"
import { Navigate, Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { pageConfig } from "./config/pages.config.ts"
import "./App.scss"
import { ScrollTop } from "./components/UI"


const App: FC = () => {
	return (
		<BrowserRouter>
			<ScrollTop />
			<Header />

			<Routes>
				<Route path={pageConfig.home} element={<HomePage />} />
				<Route path={pageConfig.faq} element={<FaqPage />} />
				<Route path={pageConfig.projects} element={<ErrorPage />} />
				<Route path={pageConfig.blog} element={<ErrorPage />} />
				<Route path={pageConfig.processing_personal_data} element={<ProcessingPersonalDataPage />} />

				<Route path={pageConfig.error404} element={<ErrorPage />} />
				<Route path="*" element={<Navigate to={pageConfig.error404} replace />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
