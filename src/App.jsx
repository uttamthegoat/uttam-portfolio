import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/static/Navbar";
import allRoutes from "./utils/routes";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Navbar />
        <div className="routes-layout">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {allRoutes.map((route) => (
                <Route
                  key={route.id}
                  exact
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>
          </AnimatePresence>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
