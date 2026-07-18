import styled from "styled-components";
import Button from "../common/Button";
import EmotionItem from "../EmotionItem/EmotionItem";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "그럭저럭" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

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
function Editor() {
  const emotionId = 2;
  return (
    <PageContainer>
      <SectionContainer>
        <SectionTitle>오늘의 날짜</SectionTitle>
        <DateInput type="date" />
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>오늘의 감정</SectionTitle>
        <EmotionContainer>
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </EmotionContainer>
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>오늘의 일기</SectionTitle>
        <ContentInput placeholder="오늘은 어땠나요?" />
      </SectionContainer>
      <BtnSection>
        <Button text={"취소하기"} />
        <Button text={"작성완료"} type={"POSITIVE"} />
      </BtnSection>
    </PageContainer>
  );
}

export default Editor;
