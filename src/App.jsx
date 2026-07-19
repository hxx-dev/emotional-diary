import { Routes, Route, useSearchParams } from "react-router-dom";
import { useState, useReducer, useRef, useEffect, createContext } from "react";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Button from "./components/common/Button";
import Header from "./components/Header/Header";

// reducer
function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT":
      return action.data;
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }
  //localStorage에 저장
  localStorage.setItem("diary", JSON.stringify(nextState));

  return nextState;
}

// context
export const DataContext = createContext();
export const FuncContext = createContext();

function App() {
  //로딩중 상태 관리
  const [isLoading, setIsLoading] = useState(true);

  //데이터 상태 관리
  const [data, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  // 초기값 설정
  useEffect(() => {
    const storedData = localStorage.getItem("diary");

    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);

    let maxId = 0;

    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });

    setIsLoading(false);
  }, []);

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
  if (isLoading) {
    return <div>로딩중...</div>;
  }

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
