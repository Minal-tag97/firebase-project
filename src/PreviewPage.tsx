import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const PreviewPage: React.FC = () => {
  const [navbarContent, setNavbarContent] = useState("");
  const [heroContent, setHeroContent] = useState("");

  useEffect(() => {
    const fetchSelections = async () => {
      try {
        const docRef = doc(db, "userSelections", "defaultUser");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          
          // Fetch the selected navbar
          const navbarRef = doc(db, "navbars", data.navbar);
          const navbarSnap = await getDoc(navbarRef);
          if (navbarSnap.exists()) {
            setNavbarContent(navbarSnap.data().content);
          }

          // Fetch the selected hero section
          const heroRef = doc(db, "heroSections", data.hero);
          const heroSnap = await getDoc(heroRef);
          if (heroSnap.exists()) {
            setHeroContent(heroSnap.data().content);
          }
        }
      } catch (error) {
        console.error("Error fetching preview data:", error);
      }
    };

    fetchSelections();
  }, []);

  return (
    <div>
      {/* Render the selected navbar and hero section */}
      <div dangerouslySetInnerHTML={{ __html: navbarContent }} />
      <div dangerouslySetInnerHTML={{ __html: heroContent }} />
    </div>
  );
};

export default PreviewPage;
