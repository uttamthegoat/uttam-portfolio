/* eslint-disable react-refresh/only-export-components */
import HomeComponent from "../components/home/HomeComponent";
import AboutPage from "../components/about/AboutPage";
import Skills from "../components/skills/Skills";
import transition from "../utils/transition";
import EducationAndExp from "../components/education/EducationAndExp";

const Home = () => {
  return (
    <div>
      <HomeComponent />
      <AboutPage />
      <Skills />
      <EducationAndExp />
    </div>
  );
};

export default transition(Home);
// export default Home;
