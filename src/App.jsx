import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import Button from "./components/common/Button";

function App() {
  return (
    <>
      <Button
        text={"회색"}
        $type={"DEFAULT"}
        onClick={() => console.log("버튼 눌림")}
      />
      <Button
        text={"녹색"}
        $type={"POSITIVE"}
        onClick={() => console.log("버튼 눌림")}
      />
      <Button
        text={"붉은색"}
        $type={"NEGATIVE"}
        onClick={() => console.log("버튼 눌림")}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
