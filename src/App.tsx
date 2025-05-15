import React from "react";
 import NavbarComponent from "./Navbar";// Import the NavbarSwitcher component
 import HeroComponent from "./heroSection";
import Dashboard from "./Dashbord";



const App: React.FC = () => {
  return (
    <div>
       {/* <NavbarComponent /> This component handles navbar selection and rendering */}
       {/* <HeroComponent/>  */}
       <Dashboard/>

    


    </div>
  );
};

export default App;