import styled from "styled-components";
import getEmotionImage from "../../util/get-emotion-image";

const COLORS = {
  1: "rgb(100, 201, 100)",
  2: "rgb(157, 215, 114)",
  3: "rgb(253, 206, 23)",
  4: "rgb(253, 132, 70)",
  5: "rgb(253, 86, 95)",
};

const Container = styled.div`
  background-color: ${({ $isSelected, $emotionId }) => ($isSelected ? COLORS[$emotionId] : "rgb(236,236,236)")};
  color: ${({ $isSelected }) => ($isSelected ? "white" : "black")};
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  text-align: center;
`;

const EmtionImg = styled.img`
  width: 50%;
  margin-bottom: 10px;
`;

function EmotionItem({ emotionId, emotionName, isSelected, onClick }) {
  return (
    <Container
      onClick={onClick}
      $isSelected={isSelected}
      $emotionId={emotionId}
    >
      <EmtionImg src={getEmotionImage(emotionId)} />
      <div>{emotionName}</div>
    </Container>
  );
}

export default EmotionItem;
