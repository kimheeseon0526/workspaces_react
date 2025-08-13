import React from "react";

//css를 변수에 담아 체이닝 형식 비스무리하게 가져온다
const styles = {
//json형태로
  wrapper:{
    margin: 8,
    padding: 8,
    display:"flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  imageContainer: {},
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentContainer: {
    marginLeft: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  nameText: {
    color:"black",
    fontsize: 16,
    fontWeight: "bold"
  },
  commentText:{
    color: "black",
    fontsize: 16
  }
};

function Comment(props) {
  return(
      <div style={styles.wrapper}>
        <div style={styles.imageContainer}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" style={styles.image}
          />
        </div>

        <div style={styles.contentContainer}>
          {/* 작성자 이름과 댓글 내용을 동적으로 변경할 수 있게 props 추가 */}
          <span style={styles.nameText}>{props.name}</span>
          <span style={styles.commentText}>{props.comment}</span>
        </div>
      </div>
  );
}

export default Comment;