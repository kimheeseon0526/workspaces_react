import React, {useCallback, useState} from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";
import Dummy from "./Dummy";

function DarkOrLight(props) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    //useCallback : 불필요한 리랜더링 막기 위한 훅
    //[theme] 가 바뀔 때만 새 함수로 갱신(light <->dark)
    if(theme == "light") {
      setTheme("dark");
    }
    else if(theme == "dark"){
      setTheme("light");
    }
  }, [theme]);

  return(
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {/*2.리액트 context  사용할 수 있는 곳 지정*/}
        {/*ThemeContext.Provider 를 하위 컴포넌트로 감싸서 ThemeContext를 사용할 수 있도록함*/}
        <Dummy />
        {/*<MainContent />*/}
      </ThemeContext.Provider>
  );
}

export default DarkOrLight;