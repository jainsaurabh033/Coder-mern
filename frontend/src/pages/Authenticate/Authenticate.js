import React, { useState } from "react";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOtp/StepOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticate = () => {
  const [step, Setstep] = useState(1);
  const Step = steps[step];

  function onNext() {
    Setstep(step + 1);
  }

  return <Step onNext={onNext} />;
};

export default Authenticate;
