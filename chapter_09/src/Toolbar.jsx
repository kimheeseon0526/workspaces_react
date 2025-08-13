import React from "react";

const styles = {
  wrapper : {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid grey"
  },
  greeting: {
    marginRight: 8
  },
};

function Toolbar(props) {
  const {isLoggedIn, onClickLogin, onClickLogout} = props;
  //위처럼 props를 const 객체에 값을 넣어주면 아래에 props.~~ 할 필요가 없다

  return (
      <div style={styles.wrapper}>
        {isLoggedIn && <span style={styles.greeting}> 응 어서오고~</span> }

        {isLoggedIn ? (
            <button onClick={onClickLogout}>사라져</button>
        ) : (
            <button onClick={onClickLogin}>다시 나타나</button>
        )}
      </div>
  );
}

export default Toolbar;