import { FC } from "react"
import { Navigate, Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { Analytics } from "@vercel/analytics/next"
import { ErrorPage, FaqPage, HomePage, ProcessingPersonalDataPage, ThanksPage, CasesPage, BlogPage, BlogsPage } from "./pages/index.js.ts"
import { Header } from "./components"
import { ScrollTop } from "./components/ui"
import { pageConfig } from "./config/pages.config.ts"
import "./App.scss"

const App: FC = () => {
	return (
		<BrowserRouter>
			<ScrollTop />
			<Header />

			<Routes>
				<Route path={pageConfig.home} element={<HomePage />} />
				<Route path={pageConfig.faq} element={<FaqPage />} />
				<Route path={pageConfig.processing_personal_data} element={<ProcessingPersonalDataPage />} />
				<Route path={pageConfig.thanks} element={<ThanksPage />} />

				<Route path={pageConfig.projects} element={<CasesPage />} />

				<Route path={pageConfig.blog} element={<BlogPage />} />
				<Route path={pageConfig.blogs} element={<BlogsPage />} />


				<Route path={pageConfig.error404} element={<ErrorPage />} />
				<Route path="*" element={<Navigate to={pageConfig.error404} replace />} />
			</Routes>

			<Analytics />
		</BrowserRouter>
	)
}

export default App
