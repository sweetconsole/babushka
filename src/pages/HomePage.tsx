import {FC} from "react";
import Intro from "../components/Intro/Intro.tsx";
import Features from "../components/Features/Features.tsx";
import CasesPreview from "../components/Cases/CasesPreview.tsx";
import AboutUs from "../components/AboutUs/AboutUs.tsx";
import Prices from "../components/Prices/Prices.tsx";

const HomePage: FC = () => {
  return (
    <main>
      <Intro />
      <Features />
      <CasesPreview />
      <AboutUs />
      <Prices />
    </main>
  )
}

export default HomePage;