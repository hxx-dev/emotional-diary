import styled from "styled-components";
import Button from "../common/Button";
import EmotionItem from "../EmotionItem/EmotionItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { emotionList } from "../../util/constants";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h4`
  font-size: 22px;
  font-weight: bold;
`;

const DateInput = styled.input`
  background-color: rgb(236, 236, 236);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 20px;
`;

const EmotionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

const ContentInput = styled.textarea`
  background-color: rgb(236, 236, 236);
  border: none;
  border-radius: 5px;
  padding: 20px;
  font-size: 20px;
  width: 93%;
  min-height: 200px;
  resize: vertical;
  box-size: border-box;
`;

const BtnSection = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
`;

const SectionContainer = styled.div`
  margin-bottom: 40px;
`;
// Date 객체 스트링으로 만드는 함수
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};

function Editor({ onSubmit, initData }) {
  // 상태 관리
  const [input, setInput] = useState({
    createDate: new Date(),
    emotionId: 3,
    content: "",
  });

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createDate: new Date(Number(initData.createDate)),
      });
    }
  }, [initData]);

  const nav = useNavigate();
  //이벤트 핸들러
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };
  //작성완료 버튼 이벤트 핸들러
  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>오늘의 날짜</SectionTitle>
        <DateInput
          onChange={onChangeInput}
          name={"createDate"}
          value={getStringedDate(input.createDate)}
          type="date"
        />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>오늘의 감정</SectionTitle>
        <EmotionContainer>
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </EmotionContainer>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>오늘의 일기</SectionTitle>
        <ContentInput
          name={"content"}
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </SectionContainer>
      <BtnSection>
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onSubmitButtonClick}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </BtnSection>
    </PageContainer>
  );
}

export default Editor;
