import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/Shared/Card/Card";
import Button from "../../components/Shared/Button/Button";

const Home = () => {
  const signInLinkstyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };

  const navigate = useNavigate();

  function startRegister() {
    navigate("/register");
    console.log("button clicked");
  }

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Coderhouse!" icons="logo">
        <p className={styles.text}>
          We're working hard to get Coderhouse ready for everyone! while we wrap
          up the finishing youches, we're adding people gradually to make sure
          nothing breaks
        </p>
        <div>
          <Button text="Get your username" onClick={startRegister} />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkstyle} to="/login">
            Sign in
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
