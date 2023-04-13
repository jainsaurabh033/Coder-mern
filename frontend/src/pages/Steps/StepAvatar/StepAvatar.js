import React from "react";

const StepAvatar = ({ onNext }) => {
  return (
    <>
      <div>
        <h1>Avatar</h1>
      </div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepAvatar;
