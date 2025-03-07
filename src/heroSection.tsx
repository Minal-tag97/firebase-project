import React, {useState, useEffect} from "react";
import {db} from './firebase';
import {doc, getDoc} from "firebase/firestore";

const HeroSectionSwitcher: React.FC = () => {
    const [heroContent, setHeroContent] = useState("");
    const [selectedHero, setSelectedHero] = useState("hero1");

    useEffect(() => {
        fetchHero(selectedHero);
    }, [selectedHero]);

    const fetchHero = async(heroId: string) => {
        try{
            const docRef = doc(db, "heroSections", heroId);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                setHeroContent(docSnap.data().content);
            } else {
                console.log("No such document!");
            }
        } catch (error){
            console.log("Error fetching hero section:", error);
        }
    };

    return(
        <div>
            {/*Dropdown for selecting hero section*/}
            <label htmlFor="hero-select">Choose Hero Section:</label>
            <select 
                id="hero-select"
                value={selectedHero}
                onChange={(e) => setSelectedHero(e.target.value)}>
                    <option value="hero1">Hero Layout 1</option>
                    <option value="hero2">Hero Layout 2</option>
                    <option value="hero3">Hero Layout 3</option>
                </select>

                {/*Dynamic Hero Section Rendering*/}
                <div className="hero-container" dangerouslySetInnerHTML={{__html: heroContent}} />
        </div>
    )
};

export default HeroSectionSwitcher