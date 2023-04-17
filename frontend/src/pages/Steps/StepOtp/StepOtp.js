import React, { useState } from "react";
import Card from "../../../components/Shared/Card/Card";
import TextInput from "../../../components/Shared/TextInput/TextInput";
import Button from "../../../components/Shared/Button/Button";
import styles from "./StepOtp.module.css";
import { verifyOtp } from "../../../http/index";
import { useSelector, useDispatch } from "react-redux";
import { setAuth } from "../../../store/authSlice";

const StepOtp = () => {
  const [otp, setOtp] = useState("");

  const dispatch = useDispatch();

  const { phone, hash } = useSelector((state) => state.auth.otp);

  async function submit() {
    try {
      if (!otp || !phone || !hash) return;
      const { data } = await verifyOtp({ otp, phone, hash });
      console.log(data);
      dispatch(setAuth(data));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Enter the code we just texted you" icons="lock-emoji">
          <TextInput value={otp} onChange={(e) => setOtp(e.target.value)} />
          <div className={styles.actionButtonWrap}>
            <Button onClick={submit} text="Next" />
          </div>
          <p className={styles.bottomParaGraph}>
            By entering your number, you're agreeing to our Terms of Service and
            Privacy Policy. Thanks!
          </p>
        </Card>
      </div>
    </>
  );
};

export default StepOtp;
