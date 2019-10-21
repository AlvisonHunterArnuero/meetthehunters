import React from "react";
import NavButtons from "./NavButtons";
import { useSelector} from "react-redux";

function App() {
  const person = useSelector(state => state.Members);

  return (
    <div className="App">
      <div className="container-fluid">
        <NavButtons />

        <div className="row mytopmargin">
          <div className="col-lg-3 col-sm-12 col-xs-12">
            <div className="circular--portrait">
              <img
                src={person.photo ? person.photo : "liam.jpg"}
                className="rounded-circle fade-in chosen"
                alt={person.name}
              />
            </div>
          </div>

          <div className="col-lg-1 col-sm-12 col-xs-12"></div>

          <div className="col-lg-8 col-sm-12 col-xs-12">
            <ul className="list-group">
              <li className="list-group-item active">
                {" "}
                <b className="text-uppercase">
                  {" "}
                  {person.name ? person.name : "Liam Hunter"}{" "}
                </b>
              </li>
              <li className="list-group-item">
                <b className="text-uppercase">quote: </b>
                {person.quote
                  ? person.quote
                  : "dada mamma tetan, chichi ah hoia, ti ta"}
              </li>
              <li className="list-group-item">
                <b className="text-uppercase">hobbies: </b>
                {person.hobbies
                  ? person.hobbies
                  : "Sleep, Eat, Sleep, Eat, Poop"}
              </li>
              <li className="list-group-item">
                <b className="text-uppercase"> food: </b>
                {person.food
                  ? person.food
                  : "Chicken, Fish, Fried Plantains, Potatoes, Espaguetti"}
              </li>
              <li className="list-group-item">
                <b className="text-uppercase">languages: </b>
                {person.languages ? person.languages : "Spanish, English"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
