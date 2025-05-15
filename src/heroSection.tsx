import  {useState, useEffect} from "react";
import {db} from './firebase';
import {collection, getDocs} from "firebase/firestore";

const HeroComponent = () => {
  const [heroContent, setHeroContent] = useState<string>("");

  //Function to fetch the active hero
  const fetchActiveHero = async() => {
    try{
      const querySnapshot = await getDocs(collection(db, "heroSections"));
      let activeHero = null;

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if(data.active){
          activeHero = data.content; //get html content of active heroSection
        }
      });

      if(activeHero){
        setHeroContent(activeHero); //set the active hero content
      } else{
        console.log("No active hero found.");
      }
    } catch(error){
      console.error("Error fetching hero:", error);
    }
  };

  useEffect(() => {
    fetchActiveHero();
  }, []);

  return(
    <div>
      {/*Render Hero Html*/}
      <div dangerouslySetInnerHTML={{__html: heroContent}}/>
    </div>
  )
}

export default HeroComponent;