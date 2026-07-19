import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Button from "../components/common/Button";
import Viewer from "../components/Viewer/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

function Diary() {
  const params = useParams();
  const nav = useNavigate();
  const curDiaryItem = useDiary(params.id);
  if (!curDiaryItem) {
    return <div>데이터 로딩중...</div>;
  }
  const { createDate, emotionId, content } = curDiaryItem;

  const curDate = getStringedDate(new Date(createDate));

  return (
    <div>
      <Header
        title={`${curDate} 기록`}
        leftBtn={<Button onClick={() => nav(-1)} text={"< 뒤로 가기"} />}
        rightBtn={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
}

export default Diary;
