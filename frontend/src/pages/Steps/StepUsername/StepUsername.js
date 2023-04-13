import React from "react";

const StepUsername = ({ onNext }) => {
  return (
    <>
      <div>
        <h1>StepUsername component</h1>
      </div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepUsername;
