import styled from "styled-components";
import Button from "../common/Button";
import getEmotionImage from "../../util/get-emotion-image";
import { useNavigate } from "react-router-dom";

const COLORS = {
  1: "rgb(100, 201, 100)",
  2: "rgb(157, 215, 114)",
  3: "rgb(253, 206, 23)",
  4: "rgb(253, 132, 70)",
  5: "rgb(253, 86, 95)",
};

const Container = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-between;
  padding: 15px 0px;
  border-bottom: 1px solid rgb(236, 236, 236);
`;

const ImgSection = styled.div`
  min-width: 120px;
  height: 80px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${({ $emotionId }) => COLORS[$emotionId]};
`;

const EmoImg = styled.img`
  width: 50px;
`;

const InfoSection = styled.div`
  flex: 1;
  cursor: pointer;
`;

const DateSection = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const ContentSection = styled.div`
  font-size: 18px;
`;
const BtnSection = styled.div`
  min-width: 70px;
`;
function DiaryItem({ id, emotionId, createDate, content }) {
  const nav = useNavigate();

  return (
    <Container>
      <ImgSection onClick={() => nav(`/diary/${id}`)} $emotionId={emotionId}>
        <EmoImg src={getEmotionImage(emotionId)} />
      </ImgSection>
      <InfoSection onClick={() => nav(`/diary/${id}`)}>
        <DateSection>{new Date(createDate).toLocaleDateString()}</DateSection>
        <ContentSection>{content}</ContentSection>
      </InfoSection>
      <BtnSection onClick={() => nav(`/edit/${id}`)}>
        <Button text={"수정하기"} />
      </BtnSection>
    </Container>
  );
}

export default DiaryItem;
