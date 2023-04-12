import { useReducer } from "react";

// định nghĩa các type
type CounterState = { count: number };
type UpdateAction = { type: "INCREMENT" | "DECREMENT"; payload: number };
type ResetAction = { type: "RESET" };
type CounterAction = UpdateAction | ResetAction;
//Khởi tạo giá trị ban đầu
const initialState = { count: 0 };
function reducer(state: CounterState, action: CounterAction) {
  {
/* Nếu action là "INCREMENT", hàm reducer trả về một trạng thái mới với count tăng thêm giá trị payload. 
   Nếu action là "DECREMENT", hàm reducer trả về một trạng thái mới với count giảm bớt giá trị payload. 
   Nếu action là "RESET", hàm reducer trả về trạng thái ban đầu. 
   Nếu không có điều kiện nào tương ứng, hàm reducer trả về trạng thái hiện tại */
  }
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </>
  );
};
