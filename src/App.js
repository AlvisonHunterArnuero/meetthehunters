import React from "react";
import NavButtons from "./NavButtons";
import { useSelector } from "react-redux";
import Gallery from "./Gallery";

function App() {
  const person = useSelector(state => state.Members);
  return (
    <div className="App">
      <div className="container-fluid">
        <NavButtons />
        <div className="row mytopmargin">
          <div className="col-xs-12 col-sm-12 col-lg-12 col-xl-4 btnMargins">
            <ul className="list-group">
              <li className="list-group-item bg-danger">
                {" "}
                <b className="display-4 text-uppercase text-white">
                  {" "}
                  {person.name ? person.name : "Liam Hunter"}{" "}
                </b>
              </li>
              <li className="list-group-item">
                <h4 className="text-uppercase">quote: </h4>
                {person.quote
                  ? person.quote
                  : "dada mamma tetan, chichi ah hoia, ti ta"}
              </li>
              <li className="list-group-item">
                <h4 className="text-uppercase">hobbies: </h4>
                {person.hobbies
                  ? person.hobbies
                  : "Sleep, Eat, Sleep, Eat, Poop"}
              </li>
              <li className="list-group-item">
                <h4 className="text-uppercase"> food: </h4>
                {person.food
                  ? person.food
                  : "Chicken, Fish, Fried Plantains, Potatoes, Espaguetti"}
              </li>
              <li className="list-group-item">
                <h4 className="text-uppercase">languages: </h4>
                {person.languages ? person.languages : "Spanish, English"}
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-12 col-lg-12 col-xl-8">
            <Gallery />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
