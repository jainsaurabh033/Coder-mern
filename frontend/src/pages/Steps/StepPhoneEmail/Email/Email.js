import React, { useState } from "react";
import Card from "../../../../components/Shared/Card/Card";
import Button from "../../../../components/Shared/Button/Button";
import TextInput from "../../../../components/Shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";

const Email = ({ onNext }) => {
  const [email, setEmail] = useState("");
  return (
    <Card title="Enter your email id" icons="email-emoji">
      <TextInput
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Next" onClick={onNext} />
        </div>
        <p className={styles.bottomParaGraph}>
          By entering your number, you're agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </div>
    </Card>
  );
};

export default Email;
