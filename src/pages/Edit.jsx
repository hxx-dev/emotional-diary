import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/common/Button";
import Editor from "../components/Editor/Editor";
import { useContext, useEffect, useState } from "react";
import { FuncContext, DataContext } from "../App";

function Edit() {
  const params = useParams();

  const nav = useNavigate();

  const [curDiaryItem, setCurDiaryItem] = useState();

  const { onDelete, onUpdate } = useContext(FuncContext);

  const data = useContext(DataContext);
  
  //선택된 일기로 상태값 변환
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id),
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [params.id]);

  // 삭제 버튼 이벤트 핸들러
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  //작성완료 버튼 수정 기능
  const onSubmit = (input) => {
    if (window.confirm("일기를 수정할까요?")) {
      onUpdate(
        params.id,
        input.createDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftBtn={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightBtn={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor onSubmit={onSubmit} initData={curDiaryItem} />
    </div>
  );
}

export default Edit;
