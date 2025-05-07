import {FC} from "react"
import {FAQ, Footer, ProcessingPersonalData} from "../components";

const ProcessingPersonalDataPage: FC = () => {
	return (
    <>
      <main>
        <ProcessingPersonalData />
        <FAQ />
      </main>

      <Footer />
    </>
	)
}

export default ProcessingPersonalDataPage