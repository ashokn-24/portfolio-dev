import NavBar from "./components/NavBar";
import CodingAchievementsSection from "./sections/CodingAchievementsSection";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";

type Props = {};

const App = (_props: Props) => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <CodingAchievementsSection />
      <ExperienceSection />
      <TechStack />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default App;
