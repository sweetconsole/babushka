import {FC} from "react";
import {Intro,
  Info,
  CasesPreview,
  Experience,
  Services,
  AdditionalServices,
  HowWork,
  Feedback,
  Features,
  FAQ,
  Footer } from "../components";
import { BlogsPreview } from "../components/Blog"

const HomePage: FC = () => {
  return (
    <>
      <main>
        <Intro />
        <Info />
        <Experience />
        <CasesPreview />
        <Services />

        <AdditionalServices />
        <HowWork />
        <BlogsPreview />
        <Feedback />
        <Features />
      </main>

      <FAQ />
      <Footer />
    </>
  )
}

export default HomePage;