import React, { useState } from "react";
import Card from "../../../components/Shared/Card/Card";
import Button from "../../../components/Shared/Button/Button";
import TextInput from "../../../components/Shared/TextInput/TextInput";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../../../store/activateSlice";
import styles from "./StepName.module.css";
const StepName = ({ onNext }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.activate);
  const [fullname, setFullname] = useState(name);

  function nextStep() {
    if (!fullname) {
      return;
    }
    dispatch(setName(fullname));
    onNext();
  }

  return (
    <>
      <Card title="What's your full name?" icons="goggle-emoji">
        <TextInput
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <p className={styles.paragraph}>
          People use real names at coderhouse :) !
        </p>
        <div>
          <Button onClick={nextStep} text="Next" />
        </div>
      </Card>
    </>
  );
};

export default StepName;
