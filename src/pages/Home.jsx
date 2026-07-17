import Header from "../components/Header/Header";
import Button from "../components/common/Button";
import DiaryList from "../components/DiaryList/DiaryList";

function Home() {
  return (
    <div>
      <Header
        title={"2026년 7월"}
        leftBtn={<Button text={"<"} />}
        rightBtn={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
}

export default Home;
