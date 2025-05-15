import { useState, useEffect } from "react";
import { db } from "./firebase"; // Your Firebase setup
import { doc, setDoc, getDoc, collection, getDocs } from "firebase/firestore";

const CustomizationPage = () => {
  const [heroSections, setHeroSections] = useState<{ id: string; content: string }[]>([]);
  const [selectedHero, setSelectedHero] = useState<string>("");
  const [previewContent, setPreviewContent] = useState<string>("");

  // Fetch hero sections from Firestore
  useEffect(() => {
    const fetchHeroSections = async () => {
      const querySnapshot = await getDocs(collection(db, "heroSections"));
      const sections = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        content: doc.data().content,
      }));
      setHeroSections(sections);
      
      // Load saved selection
      const docRef = doc(db, "customization", "userSelection");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setSelectedHero(data.hero);
        const selected = sections.find((s) => s.id === data.hero);
        setPreviewContent(selected ? selected.content : "");
      }
    };
    fetchHeroSections();
  }, []);

  // Save selected hero section
  const handleSave = async () => {
    await setDoc(doc(db, "customization", "userSelections"), {
      hero: selectedHero,
    });
    alert("Changes saved!");
  };

  return (
    <div>

      {/* Dropdown to select Hero Section */}
      <label>
        Choose Hero Section:
        <select
          value={selectedHero}
          onChange={(e) => {
            setSelectedHero(e.target.value);
            const selected = heroSections.find((s) => s.id === e.target.value);
            setPreviewContent(selected ? selected.content : "");
          }}
        >
          <option value="">Select a hero section</option>
          {heroSections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.id}
            </option>
          ))}
        </select>
      </label>

      <br />
      <button onClick={handleSave}>Save Changes</button>

      {/* Preview Section */}
      <div>
        <h3>Preview</h3>
        <div dangerouslySetInnerHTML={{ __html: previewContent }} />
      </div>
    </div>
  );
};

export default CustomizationPage;
