import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase"; // Ensure correct Firebase config import

const NavbarComponent = () => {
  const [navbarContent, setNavbarContent] = useState<string>("");

  // Function to fetch the active navbar
  const fetchActiveNavbar = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "navbars"));
      let activeNavbar = null;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.active) {
          activeNavbar = data.content; // Get HTML content of active navbar
        }
      });

      if (activeNavbar) {
        setNavbarContent(activeNavbar); // Set the active navbar content
      } else {
        console.log("No active navbar found.");
      }
    } catch (error) {
      console.error("Error fetching navbar:", error);
    }
  };

  useEffect(() => {
    fetchActiveNavbar();
  }, []);

  return (
    <div>
      {/* Render Navbar HTML */}
      <div dangerouslySetInnerHTML={{ __html: navbarContent }}/>
    </div>
  );
};

export default NavbarComponent;
