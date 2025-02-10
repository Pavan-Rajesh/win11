import React from "react";
import MiddleSection from "./middle-section/MiddleSection";

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 border-1 bg-white/20 w-full  p-0 flex justify-center h-[clamp(45px,5.5vh,65px)] backdrop-blur-lg z-50">
      <MiddleSection />
    </nav>
  );
};

export default NavBar;
