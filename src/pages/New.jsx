import styled from "styled-components";
import Header from "../components/Header/Header";
import Button from "../components/common/Button";
import Editor from "../components/Editor/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FuncContext } from "../App";

function New() {
  const nav = useNavigate();
  const { onCreate } = useContext(FuncContext);

  const onSubmit = (input) => {
    onCreate(input.createDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftBtn={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
}

export default New;
