import { useState, useContext, useEffect } from "react";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

//선택된 일기로 상태값 변환하는 커스텀 훅
function useDiary(id) {
  const data = useContext(DataContext);
  const [curDiaryItem, setCurDiaryItem] = useState();
  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id),
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id]);

  return curDiaryItem;
}

export default useDiary;
