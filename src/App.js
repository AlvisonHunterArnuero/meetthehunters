import React from "react";
import NavButtons from "./components/NavButtons";
import { useSelector } from "react-redux";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const person = useSelector((state) => state.familyMembersReducer);
  const { name, quote, hobbies, food, languages } = person;
  return (
    <div className='App'>
      <div className='container-fluid'>
        <NavButtons />
        <div className='row'>
          <p className='text-info ml-4 text-uppercase display-4'>
            MEET {name ? name : "Liam Hunter"}
          </p>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-xl-3'>
            <div className='card text-white bg-secondary mb-3'>
              <div className='card-header'>FAMOUS QUOTE</div>
              <div className='card-body'>
                <p className='card-text'>
                  {quote ? quote : "Are you kidding me?"}
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-xl-3'>
            <div className='card text-white bg-secondary mb-3'>
              <div className='card-header'>HOBBIES</div>
              <div className='card-body'>
                <p className='card-text'>
                  {hobbies ? hobbies : "Play with Dinosaurs, singing and dancing, watching TV"}
                </p>
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-xl-3'>
            <div className='card text-white bg-secondary mb-3'>
              <div className='card-header'>FAVORITE FOOD</div>
              <div className='card-body'>
                <p className='card-text'>
                  {food
                    ? food
                    : "Chicken, Fish, Fried Plantains, Potatoes, Espaguetti"}
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-xl-3'>
            <div className='card text-white bg-secondary mb-3'>
              <div className='card-header'>SPOKEN LANGUAGES</div>
              <div className='card-body'>
                <p className='card-text'>
                  {languages ? languages : "Spanish, English"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='col-xs-12 col-sm-12 col-lg-12 col-xl-12'>
          <Gallery />
        </div>
      </div>
    <Footer />
    </div>
  );
}

export default App;
