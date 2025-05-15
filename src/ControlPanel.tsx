import React, { useState } from 'react';
import PreviewScreen from './PreviewScreen';

const ControlPanel: React.FC = () => {
  const [selectedNavbar, setSelectedNavbar] = useState('Navbar 2'); // Default
  const [selectedHeroSection, setSelectedHeroSection] = useState('Hero Layout 2'); // Default
  const [heroSectionContent, setHeroSectionContent] = useState('');
  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <div className="mb-4">
          <label htmlFor="navbar">Choose Navbar:</label>
          <select
            id="navbar"
            value={selectedNavbar}
            onChange={(e) => setSelectedNavbar(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="Navbar 1">Navbar 1</option>
            <option value="Navbar 2">Navbar 2</option>
            {/* Add more options */}
          </select>
        </div>
        <div>
          <label htmlFor="hero">Choose Hero Section:</label>
          <select
            id="hero"
            value={selectedHeroSection}
            onChange={(e) => setSelectedHeroSection(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="Hero Layout 1">Hero Layout 1</option>
            <option value="Hero Layout 2">Hero Layout 2</option>
            {/* Add more options */}
          </select>
        </div>
      </div>
      <PreviewScreen selectedNavbar={selectedNavbar} selectedHeroSection={selectedHeroSection} heroSectionContent={heroSectionContent} />
    </div>
  );
};

export default ControlPanel;