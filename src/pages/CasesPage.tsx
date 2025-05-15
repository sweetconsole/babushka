import { FC } from "react"
import { Cases, FAQ, Feedback, Footer, CaseIntro } from "../components"

const CasesPage: FC = () => {
	return (
		<>
      <main>
				<CaseIntro />
				<Cases />
				<Feedback />
				<FAQ />
      </main>

			<Footer />
		</>
	)
}

export default CasesPage