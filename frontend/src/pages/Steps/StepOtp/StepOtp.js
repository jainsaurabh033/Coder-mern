import React from "react";

const StepOtp = ({ onNext }) => {
  return (
    <>
      <div>
        <h1>Otp component</h1>
      </div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepOtp;
