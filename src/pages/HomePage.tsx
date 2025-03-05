import {FC} from "react";
import Intro from "../components/Intro/Intro.tsx";
import Features from "../components/Features/Features.tsx";
import CasesPreview from "../components/Cases/CasesPreview.tsx";

const HomePage: FC = () => {
  return (
    <>
      <Intro />
      <Features />
      <CasesPreview />
    </>
  )
}

export default HomePage;