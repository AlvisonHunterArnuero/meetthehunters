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
   
        <div className="row mytopmargin">
            <div className="col-lg-3 col-sm-12">
              <button
                onClick={() => myDispatcher(displayLiamData("liam.jpg"))}
                className="btn btn-outline-primary btn-block btnMargins"
              >
                The Baby
              </button>
            </div>
            <div className="col-lg-3 mb-2 col-sm-12">
            <button
              onClick={() => myDispatcher(displayOniceData("onice.jpg"))}
              className="btn btn-outline-success btn-block btnMargins"
            >
              The Mother
            </button>
            </div>
            <div className="col-lg-3 mb-2 col-sm-12">
            <button
              onClick={() => myDispatcher(displayDeclanData("declan.jpg"))}
              className="btn btn-outline-warning btn-block btnMargins"
            >
              The Elder
            </button>
            </div>
            <div className="col-lg-3 mb-2 col-sm-12">
            <button
              onClick={() => myDispatcher(displayAlvisonData("alvison.jpg"))}
              className="btn btn-outline-info btn-block"
            >
              The Father
            </button>
            </div>
        </div>

  );
}

export default NavButtons;
