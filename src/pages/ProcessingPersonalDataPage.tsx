import { FC } from "react"
import { FAQ, Feedback, Footer, ProcessingPersonalData } from "../components"

const ProcessingPersonalDataPage: FC = () => {
	return (
    <>
      <main>
        <ProcessingPersonalData />
				<Feedback />
        <FAQ />
      </main>

      <Footer />
    </>
	)
}

export default ProcessingPersonalDataPage