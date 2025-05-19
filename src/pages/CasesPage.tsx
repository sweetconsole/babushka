import { FC } from "react"
import { Cases, FAQ, Feedback, Footer, CaseIntro } from "../components"

const CasesPage: FC = () => {
	return (
		<>
      <main>
				<CaseIntro />
				<Cases />
      </main>

			<Feedback />
			<FAQ />
			<Footer />
		</>
	)
}

export default CasesPage