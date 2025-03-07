import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Import Firebase setup
import { doc, getDoc } from "firebase/firestore";

const NavbarSwitcher: React.FC = () => {
  const [navbarContent, setNavbarContent] = useState("");
  const [selectedNavbar, setSelectedNavbar] = useState("navbar1");

  useEffect(() => {
    fetchNavbar(selectedNavbar);
  }, [selectedNavbar]);

  // Function to fetch navbar from Firestore
  const fetchNavbar = async (navbarId: string) => {
    try {
      const docRef = doc(db, "navbars", navbarId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setNavbarContent(docSnap.data().content); // Insert navbar HTML
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching navbar:", error);
    }
  };

  return (
    <div>
      {/* Dropdown for selecting navbar */}
      <label htmlFor="navbar-select">Choose Navbar: </label>
      <select
        id="navbar-select"
        value={selectedNavbar}
        onChange={(e) => setSelectedNavbar(e.target.value)}
      >
        <option value="navbar1">Navbar 1</option>
        <option value="navbar2">Navbar 2</option>
        <option value="navbar3">Navbar 3</option>
      </select>
 
      {/* Dynamic Navbar Rendering */}
      <div className="navbar-container" dangerouslySetInnerHTML={{ __html: navbarContent }} />
    </div>
  );
};

export default NavbarSwitcher;
