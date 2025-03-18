import {FC} from "react";
import Intro from "../components/Intro/Intro.tsx";
import Info from "../components/Info/Info.tsx";
import CasesPreview from "../components/Cases/CasesPreview.tsx";
import Experience from "../components/Experiences/Experience.tsx";
import Services from "../components/Services/Services.tsx";

import AdditionalServices from "../components/AdditionalServices/AdditionalServices.tsx";
import HowWork from "../components/HowWork/HowWork.tsx";
import BlogPreview from "../components/Blog/BlogsPreview.tsx";
import Feedback from "../components/Feedback/Feedback.tsx";
import Features from "../components/Features/Features.tsx";

import FAQ from "../components/FAQ/FAQ.tsx";
import Footer from "../components/Footer/Footer.tsx";


const HomePage: FC = () => {
  return (
    <>
      <main>
        <Intro />
        <Info />
        <CasesPreview />
        <Experience />
        <Services />

        <AdditionalServices />
        <HowWork />
        <BlogPreview />
        <Feedback />
        <Features />

        <FAQ />
      </main>

      <Footer />
    </>
  )
}

export default HomePage;