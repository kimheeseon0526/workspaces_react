import React, {useContext} from "react";
import ThemeContext from "./ThemeContext";

function MainContent(props) {
  // 3.사용할 곳에 useContext 사용하여 호출
  const {theme, toggleTheme} = useContext(ThemeContext);

  return(
      <div
        style={{
          width: "100vw", //100등분
          height: "100vh",
          padding: "1.5rem",  //글씨크기 * 1.5배
          backgroundColor: theme == "light" ? "white" : "black",
          color: theme == "light" ? "black" : "white",
        }}
      >
        <p>헬로~ 테마 변경 쌉가넝</p>
        <button onClick={toggleTheme}>테마변경</button>
      </div>
  );
}
export default MainContent;