import React from "react";
import "./TransitionTop3.css";

const TransitionTop3 = React.forwardRef((props, ref) => {
  return (
    <div className="Transition" ref={ref}>
      <div className="backgroundHeader">
        <div className="text">
          <h2 className="textMachine">Déçu par notre machine ?</h2>
          <p className="nosSeries">Voici nos séries préférées...</p>
        </div>
      </div>
    </div>
  );
});

export default TransitionTop3;
