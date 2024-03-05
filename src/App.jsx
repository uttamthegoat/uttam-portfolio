import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense } from "react";
import Footer from "./components/static/Footer";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./components/static/ScrollToTop";
import allRoutes from "./utils/routes";
import { AnimatePresence } from "framer-motion";
import { SidebarProvider } from "./context/sidebar";

function App() {
  const location = useLocation();
  return (
    <div className="App flex flex-col">
      <SidebarProvider>
        <Suspense fallback={<h1>Loading...</h1>}>
          {/* <Header /> */}
          <Navbar />
          <ScrollToTop />
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
          <Footer />
        </Suspense>
      </SidebarProvider>
    </div>
  );
}

export default App;
