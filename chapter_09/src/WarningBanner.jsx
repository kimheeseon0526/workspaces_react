import React from "react";

function WarningBanner(props) {
  if(!props.warning) {
    return null;
  }

  return (
      <div style={ {color: "red", fontWeight: "bold"} }>경고경고발령!!</div>
  );
}

export default WarningBanner;