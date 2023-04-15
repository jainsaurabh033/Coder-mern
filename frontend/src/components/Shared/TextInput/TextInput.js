import React from "react";
import sytles from "./TextInput.module.css";
const TextInput = (props) => {
  return (
    <div>
      <input className={sytles.input} type="text" {...props} />
    </div>
  );
};
export default TextInput;
