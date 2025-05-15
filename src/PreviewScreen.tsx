import React, { useState, useEffect } from 'react';
import { db } from './firebase'; // Import your Firebase config
import { doc, getDoc } from 'firebase/firestore';

interface PreviewScreenProps {
  selectedNavbar: string;
  selectedHeroSection: string;
  heroSectionContent : string;
}

const PreviewScreen: React.FC<PreviewScreenProps> = ({ selectedNavbar, selectedHeroSection }) => {
  const [navbarContent, setNavbarContent] = useState<string>('');
  const [heroSectionContent, setHeroSectionContent] = useState<string>('');

  useEffect(() => {
    console.log("previewscreen heroContent:", heroSectionContent);
    const fetchContent = async () => {
      try {
        const navbarDoc = await getDoc(doc(db, 'navbars', selectedNavbar));
        if (navbarDoc.exists()) {
          setNavbarContent(navbarDoc.data().html); // Assuming you store HTML in 'html' field
        }

        const heroDoc = await getDoc(doc(db, 'heroSections', selectedHeroSection));
        if (heroDoc.exists()) {
          setHeroSectionContent(heroDoc.data().html);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, [selectedNavbar, heroSectionContent]);

  return (
    <div className="flex-1 border border-gray-300 rounded p-4">
      <iframe
        srcDoc={`
          <!DOCTYPE html>
          <html>
           
            <body>
              ${navbarContent}
              ${heroSectionContent}
            </body>
          </html>
        `}
        width="100%"
        height="600px" // Adjust as needed
        title="Preview"
      />
    </div>
  );
};

export default PreviewScreen;