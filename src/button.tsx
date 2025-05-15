import React, {useEffect, useState} from "react";
import {db} from './firebase';
import {doc, getDoc} from 'firebase/firestore';

const ButtonRenderer : React.FC = () => {
  const[buttonHtml, setButtonHtml] = useState<string | null>(null);

  useEffect(() => {
    const fetchButton = async() => {
      const docRef = doc(db, "buttons", "button1");
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setButtonHtml(docSnap.data().html);
      } else {
        console.error("No button found!");
      }
    };
    fetchButton();
  }, []);

  return(
    <div>
      {buttonHtml ? (
        <div dangerouslySetInnerHTML={{__html: buttonHtml }}/>
      ) : (
        <p>Loading Button..</p>
      )}
    </div>
  );
};

export default ButtonRenderer;