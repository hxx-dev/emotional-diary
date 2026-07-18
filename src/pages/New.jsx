import styled from "styled-components";
import Header from "../components/Header/Header";
import Button from "../components/common/Button";
import Editor from "../components/Editor/Editor";

function New() {
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftBtn={<Button text={"< 뒤로 가기"} />}
      />
      <Editor />
    </div>
  );
}

export default New;
