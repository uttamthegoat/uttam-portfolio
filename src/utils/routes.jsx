/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
// const Projects = lazy(() => import("../pages/Projects"));
import Projects from "../pages/Projects"

const allRoutes = [
  {
    id: 1,
    path: "/",
    component: <Home />,
  },
  {
    id: 2,
    path: "/all-projects",
    component: <Projects />,
  },
];

export default allRoutes;
