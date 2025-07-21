import { FC } from "react"
import { Navigate, Route, Routes } from "react-router"
import { BrowserRouter } from "react-router-dom"
import { ErrorPage, FaqPage, HomePage, ProcessingPersonalDataPage, ThanksPage, CasesPage, BlogPage, BlogsPage, CasePage } from "./pages"
import { Header } from "./components"
import { ScrollTop } from "./components/ui"
import { pagesConfig } from "./config/pages.config.ts"
import "./App.scss"

const App: FC = () => {
	return (
		<BrowserRouter>
			<ScrollTop />
			<Header />

			<Routes>
				<Route path={pagesConfig.home} element={<HomePage />} />
				<Route path={pagesConfig.faq} element={<FaqPage />} />
				<Route path={pagesConfig.processing_personal_data} element={<ProcessingPersonalDataPage />} />
				<Route path={pagesConfig.thanks} element={<ThanksPage />} />

				<Route path={pagesConfig.case} element={<CasePage />} />
				<Route path={pagesConfig.cases} element={<CasesPage />} />

				<Route path={pagesConfig.blog} element={<BlogPage />} />
				<Route path={pagesConfig.blogs} element={<BlogsPage />} />


				<Route path={pagesConfig.error404} element={<ErrorPage />} />
				<Route path="*" element={<Navigate to={pagesConfig.error404} replace />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
