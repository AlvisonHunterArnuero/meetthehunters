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
<div className="row"><p className="text-info ml-4 text-uppercase display-4">MEET {person.name ? person.name : "Liam Hunter"}</p></div>
        <div className="row">
          <div className="col-lg-3 col-xl-3">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">FAMOUS QUOTE</div>
              <div className="card-body">
                <h4 class="card-title">
                  {" "}
                  {" "}
                </h4>
                <p className="card-text">
                  {person.quote
                    ? person.quote
                    : "dada mamma tetan, chichi ah hoia, ti ta"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">HOBBIES</div>
              <div className="card-body">
                <p className="card-text">
                  {person.hobbies
                    ? person.hobbies
                    : "Sleep, Eat, Sleep, Eat, Poop"}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-xl-3">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">FAVORITE FOOD</div>
              <div className="card-body">
                <p className="card-text">
                  {person.food
                    ? person.food
                    : "Chicken, Fish, Fried Plantains, Potatoes, Espaguetti"}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-xl-3">
            <div className="card text-white bg-secondary mb-3">
              <div className="card-header">SPOKEN LANGUAGES</div>
              <div className="card-body">
                <p className="card-text">
                  {person.languages ? person.languages : "Spanish, English"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-lg-12 col-xl-12">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;
