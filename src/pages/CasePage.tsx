import { FC } from "react"
import { useParams, Navigate } from "react-router"
import { CaseType } from "../components/Cases/cases.types.ts"
import { cases } from "../components/Cases/cases.data.ts"
import { pagesConfig } from "../config/pages.config.ts"
import { Case } from "../components"

const CasePage: FC = () => {
	const params = useParams()
	let project: CaseType = cases[0]

	const isCase = () => {
		for (const article of cases) {
			if (article.link == params.caseURL) {
				project = article
				return true
			}
		}
		return false
	}

	return (
		<>
			{isCase() ? (
				<Case {...project} />
			) : (
				<Navigate to={pagesConfig.error404} />
			)}
		</>
	)
}

export default CasePage