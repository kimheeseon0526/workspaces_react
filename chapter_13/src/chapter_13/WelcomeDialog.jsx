import React from "react";
import FancyBorder from "./FancyBorder";

function WelcomeDialog(props) {
  return(
      <FancyBorder color="blue">
        <h1 className="Dialog-title">어서오쇼</h1>
        <p className="Dialog-message">
          우리 사이트 온거 환영
        </p>
      </FancyBorder>
  );
}
export default WelcomeDialog;