import {Intro,
  Info,
  CasesPreview,
  Experience,
  Services,
  AdditionalServices,
  HowWork,
  BlogsPreview,
  Feedback,
  Features,
  FAQ,
  Footer } from "../components";
import {FC} from "react";

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

        <FAQ />
      </main>

      <Footer />
    </>
  )
}

export default HomePage;