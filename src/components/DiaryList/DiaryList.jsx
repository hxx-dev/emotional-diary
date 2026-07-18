import styled from "styled-components";
import Button from "../common/Button";
import DiaryItem from "../DiaryItem/DiaryItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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

function DiaryList({ data }) {
  const nav = useNavigate();
  // 정렬 타입 상태 관리
  const [sortType, setSortType] = useState("latest");
  // 정렬 onChange 핸들러
  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };
  // 정렬 함수
  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return a.createDate - b.createDate;
      } else {
        return b.createDate - a.createDate;
      }
    });
  };
  // 정렬 함수 저장
  const SortedData = getSortedData();

  return (
    <div>
      <MenuBar>
        <SelectBar onChange={onChangeSortType}>
          <option value={"latest"}>최신 순</option>
          <option value={"oldest"}>오래된 순</option>
        </SelectBar>
        <NewButton
          onClick={() => nav("/new")}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </MenuBar>
      <div>
        {SortedData.map((item) => ( //정렬된 데이터로 매핑
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default DiaryList;
