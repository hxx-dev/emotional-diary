import styled from "styled-components";
import getEmotionImage from "../../util/get-emotion-image";
import { emotionList, COLORS } from "../../util/constants";

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 100px;
  align-items: center;
  text-align: center;
`;

const TitleContanier = styled.h4`
  font-size: 22px;
  font-weight: bold;
`;

const ImgContainer = styled.div`
  background-color: ${({ $emotionId }) => COLORS[$emotionId]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-size: 25px;
  width: 250px;
  height: 250px;
  border-radius: 5px;
`;

const ContentContainer = styled.div`
  width: 100%;
  background-color: rgb(236, 236, 236);
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

const DiaryContent = styled.p`
  padding: 20px;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  line-height: 2.5;
`;

function Viewer({ emotionId, content }) {
    
  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId),
  );
  return (
    <div>
      <SectionContainer>
        <TitleContanier>오늘의 감정</TitleContanier>
        <ImgContainer $emotionId={emotionId}>
          <img src={getEmotionImage(emotionId)} />
          {emotionItem.emotionName}
        </ImgContainer>
      </SectionContainer>
      <SectionContainer>
        <TitleContanier>오늘의 일기</TitleContanier>
        <ContentContainer>
          <DiaryContent>{content}</DiaryContent>
        </ContentContainer>
      </SectionContainer>
    </div>
  );
}

export default Viewer;
