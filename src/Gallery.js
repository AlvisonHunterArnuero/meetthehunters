import React from "react";
import { useSelector } from "react-redux";

function Gallery() {
  const person = useSelector(state => state.Members);
  return (
    <>
    <hr className="border-top" />
          <div className="container">        
            <div className="box">
              <img
                src={person.photo1 ? person.photo1 : "./pics/liam01.jpg"}
                className="fade-in chosen"
                alt={person.name}
              />
            </div>
            <div className="box">
              <img
                src={person.photo2 ? person.photo2 : "./pics/liam02.jpg"}
                className="fade-in chosen"
                alt={person.name}
              />
            </div>
            <div className="box">
              <img
                src={person.photo3 ? person.photo3 : "./pics/liam03.jpg"}
                className="fade-in chosen"
                alt={person.name}
              />
            </div>
            <div className="box">
              <img
                src={person.photo4 ? person.photo4 : "./pics/liam04.jpg"}
                className="fade-in chosen"
                alt={person.name}
              />
            </div>
          </div>
  <hr className="border-top" />      
    </>
  );
}

export default Gallery;
