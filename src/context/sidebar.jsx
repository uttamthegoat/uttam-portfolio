/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
});

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
