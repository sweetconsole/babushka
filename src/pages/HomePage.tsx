import {FC} from "react";
import Intro from "../components/Intro/Intro.tsx";
import Features from "../components/Features/Features.tsx";

const HomePage: FC = () => {
  return (
    <>
      <Intro />
      <Features />
    </>
  )
}

export default HomePage;