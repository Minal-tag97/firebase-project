import React from "react";
import NavbarSwitcher from "./Navbar"; // Import the NavbarSwitcher component
import HeroSectionSwitcher from "./heroSection";

const App: React.FC = () => {
  return (
    <div>
     
      <NavbarSwitcher /> {/* This component handles navbar selection and rendering */}
      <HeroSectionSwitcher/>
    </div>
  );
};

export default App;
