import { useState, useContext } from "react";
import { DataContext } from "../App";
import Header from "../components/Header/Header";
import Button from "../components/common/Button";
import DiaryList from "../components/DiaryList/DiaryList";

// 헤더 날짜에 맞는 일기 렌더링 함수
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0,
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createDate && item.createDate <= endTime,
  );
};

function Home() {
  const [pivotDate, setPivotData] = useState(new Date()); // 날짜 상태 관리
  const data = useContext(DataContext); // 컨텍스트 데이터
  const monthlyData = getMonthlyData(pivotDate, data); // 날짜에 맞는 일기 렌더링 함수 저장

  // 헤더 버튼 이벤트 핸들러
  const onIncreaseMonth = () => {
    setPivotData(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };
  const onDecreaseMonth = () => {
    setPivotData(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftBtn={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightBtn={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
}

export default Home;
