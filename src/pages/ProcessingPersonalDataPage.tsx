import { FC } from "react"
import { FAQ, Feedback, Footer, ProcessingPersonalData } from "../components"

const ProcessingPersonalDataPage: FC = () => {
	return (
    <>
      <main>
        <ProcessingPersonalData />

      </main>

			<Feedback />
			<FAQ />
      <Footer />
    </>
	)
}

export default ProcessingPersonalDataPage