import React from "react";
import { useDispatch } from "react-redux";
import {
  displayLiamData,
  displayDeclanData,
  displayOniceData,
  displayAlvisonData
} from "./actions";

function NavButtons() {
  
    const myDispatcher = useDispatch();
  return (
   
        <div className="d-flex flex-row justify-content-end">
            <div className="m-2">
              <button
                onClick={() => myDispatcher(displayLiamData("liam.jpg"))}
                className="btn btn-outline-primary btn-lg"
              >
                The Baby
              </button>
            </div>
            <div className="m-2">
            <button
              onClick={() => myDispatcher(displayOniceData("onice.jpg"))}
              className="btn btn-outline-success btn-lg"
            >
              The Mother
            </button>
            </div>
            <div className="m-2">
            <button
              onClick={() => myDispatcher(displayDeclanData("declan.jpg"))}
              className="btn btn-outline-warning btn-lg"
            >
              The Elder
            </button>
            </div>
            <div className="m-2">
            <button
              onClick={() => myDispatcher(displayAlvisonData("alvison.jpg"))}
              className="btn btn-outline-info btn-lg"
            >
              The Father
            </button>
            </div>
        </div>

  );
}

export default NavButtons;
