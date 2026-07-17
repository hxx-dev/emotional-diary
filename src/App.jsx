import { Routes, Route } from "react-router-dom";
import { useReducer, useRef, createContext } from "react";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Button from "./components/common/Button";
import Header from "./components/Header/Header";

//mocData
const mocData = [
  {
    id: 1,
    createDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createDate: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

// context
const DataContext = createContext();
const FuncContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mocData);
  const idRef = useRef(3);
  // 일기 생성 기능
  const onCreate = (createDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createDate, // createDate: createDate
        emotionId,
        content,
      },
    });
  };
  // 일기 수정 기능
  const onUpdate = (id, createDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createDate,
        emotionId,
        content,
      },
    });
  };
  // 일기 삭제 기능
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };
  return (
    <>
      <DataContext.Provider value={data}>
        <FuncContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FuncContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
