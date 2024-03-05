/* eslint-disable react-refresh/only-export-components */
import HomeComponent from "../components/home/HomeComponent";
import AboutPage from "../components/about/AboutPage";
import Skills from "../components/skills/Skills";
import transition from "../utils/transition";
import EducationAndExp from "../components/education/EducationAndExp";
import Projects from "../components/projects/Projects";
import { useEffect } from "react";
import ContactPage from "../components/contact/ContactPage";
import Header from "../components/static/Header";

const Home = () => {
  useEffect(() => {
    const storedPosition = sessionStorage.getItem("scrollPosition");
    const { x, y } = storedPosition
      ? JSON.parse(storedPosition)
      : { x: 0, y: 0 };
    window.scrollTo(x, y);
  }, []);

  return (
    <div>
      <Header />

      <HomeComponent />
      <AboutPage />
      <Skills />
      <EducationAndExp />
      <Projects />
      <ContactPage />
    </div>
  );
};

export default transition(Home);
// export default Home;
