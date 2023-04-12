import { useEffect, useState, useRef } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0); //khởi tạo giá trị ban đầu của timer là 0.
  {
    /*khởi tạo một ref, trong đó giá trị ban đầu của ref là null, và kiểu của nó là number|null*/
  }
  const interValRef = useRef<number | null>(null);
  {
    /*kiểm tra xem giá trị của interValRef.current có khác null hay không, nếu khác thì sẽ
     gọi hàm window.clearInterval để dừng timer.*/
  }
  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };
  //khởi tạo một timer
  useEffect(() => {
    {
      /*hàm window.setInterval để tăng giá trị của timer lên 1 sau mỗi giây. Kết quả của hàm window.setInterval được lưu trữ 
      trong interValRef.current. useEffect cũng trả về một hàm, được dùng để dừng timer bằng cách gọi hàm stopTime*/
    }
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  });

  return (
    <div>
      HookTimer - {timer} - <button onClick={() => stopTimer()}>Stop</button>
    </div>
  );
};
