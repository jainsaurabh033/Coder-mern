import React from "react";

const StepName = ({ onNext }) => {
  return (
    <>
      <div>
        <h1>Name component</h1>
      </div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepName;
