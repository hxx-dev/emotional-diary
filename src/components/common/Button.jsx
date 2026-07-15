import styled from "styled-components";

const COLORS = {
  //컬러를 추가할 수도 있으니 객체로 따로 정의
  DEFAULT: "rgb(236, 236, 236)",
  POSITIVE: "rgb(100,201,100)",
  NEGATIVE: "rgb(253,86,95)",
};

// $type 값에 따라 컬러 객체의 $type을 키로 색을 불러옮
const Btn = styled.button`
  background-color: ${({ $type }) => COLORS[$type] || COLORS["DEFAULT"]};
  font-size: 18px;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  white-space: nowrap;
`;

function Button({ text, $type, onClick }) {
  return (
    <Btn onClick={onClick} $type={$type}>
      {text}
    </Btn>
  );
}

export default Button;
