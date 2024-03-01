/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Education = lazy(() => import("../pages/Education"));
const Projects = lazy(() => import("../pages/Projects"));
const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));

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
  {
    id: 3,
    path: "/blog",
    component: <Blog />,
  },
];

export default allRoutes;
