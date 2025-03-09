import {FC} from "react";
import Intro from "../components/Intro/Intro.tsx";
import Features from "../components/Features/Features.tsx";
import CasesPreview from "../components/Cases/CasesPreview.tsx";
import AboutUs from "../components/AboutUs/AboutUs.tsx";
import Services from "../components/Services/Services.tsx";
import AdditionalServices from "../components/AdditionalServices/AdditionalServices.tsx";
import HowWork from "../components/HowWork/HowWork.tsx";
import BlogPreview from "../components/Blog/BlogPreview.tsx";

const HomePage: FC = () => {
  return (
    <main>
      <Intro />
      <Features />
      <CasesPreview />
      <AboutUs />
      <Services />
      <AdditionalServices />
      <HowWork />
      <BlogPreview />
    </main>
  )
}

export default HomePage;