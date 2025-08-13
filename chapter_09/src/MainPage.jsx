import React, {useState} from "react";
import WarningBanner from "./WarningBanner";

function MainPage(props) {
  const [showWarning, setShowWarning] = useState(false);

  const handleToggleClick = () => {
    setShowWarning(prevShowWarning => !prevShowWarning);
  }

  return (
      <div>
        <WarningBanner warning = {showWarning} />
        <button onClick={handleToggleClick}>
          {showWarning ? '숨겨!' : ' 아냐 보여!'}
        </button>
      </div>
  )
}

export default MainPage;