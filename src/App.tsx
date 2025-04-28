import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowCase";
import ShowcaseSection from "./sections/ShowcaseSection";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      {/* <LogoShowcase /> */}
      <FeatureCards />
    </>
  );
};

export default App;
