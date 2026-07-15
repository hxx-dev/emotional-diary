import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid rgb(226, 226, 226);
`;

const TitleContainer = styled.div`
  display: flex;
  width: 50%;
  font-size: 25px;
  justify-content: center;
`;

const LeftContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: flex-start;
`;

const RightContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: flex-end;
`;

function Header({ title, leftBtn, rightBtn }) {
  return (
    <HeaderContainer>
      <LeftContainer>{leftBtn}</LeftContainer>
      <TitleContainer>{title}</TitleContainer>
      <RightContainer>{rightBtn}</RightContainer>
    </HeaderContainer>
  );
}

export default Header;
