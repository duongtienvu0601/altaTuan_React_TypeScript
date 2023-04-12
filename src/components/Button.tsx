import React from "react";
{/* định nghĩa một đối tượng gồm thuộc tính handleClick. 
handleChange là một hàm xử lý sự kiện, nhận đối số là một sự kiện kiểu React.ChangeEvent<HTMLButtonElement> 
và trả về void.*/}
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>,id: number) => void;
};
export const Button = (props: ButtonProps) => {
  return <button onClick={event => props.handleClick(event,1)}>Click</button>;
};
