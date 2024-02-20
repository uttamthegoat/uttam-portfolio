import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Education = lazy(() => import("../pages/Education"));
const Projects = lazy(() => import("../pages/Projects"));
const Blog = lazy(() => import("../pages/Blog"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const allRoutes = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/education",
    component: <Education />,
  },
  {
    id: 3,
    path: "/projects",
    component: <Projects />,
  },
  {
    id: 4,
    path: "/blog",
    component: <Blog />,
  },
  {
    id: 5,
    path: "/about",
    component: <About />,
  },
  {
    id: 6,
    path: "/contact",
    component: <Contact />,
  },
];

export default allRoutes;
