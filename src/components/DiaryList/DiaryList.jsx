import styled from "styled-components";
import Button from "../common/Button";
import DiaryItem from "../DiaryItem/DiaryItem";

const MenuBar = styled.div`
  margin: 20px 0px;
  display: flex;
  gap: 10px;
`;

const SelectBar = styled.select`
  background-color: rgb(236, 236, 236);
  border: none;
  border-radius: 5px;
  font-size: 18px;
  padding: 10px 20px;
  cursor: pointer;
`;

const NewButton = styled(Button)`
  flex: 1;
`;

function DiaryList() {
  return (
    <div>
      <MenuBar>
        <SelectBar>
          <option value={"latest"}>최신 순</option>
          <option value={"oldest"}>오래된 순</option>
        </SelectBar>
        <NewButton text={"새 일기 쓰기"} type={"POSITIVE"} />
      </MenuBar>
      <div>
        <DiaryItem />
      </div>
    </div>
  );
}

export default DiaryList;
