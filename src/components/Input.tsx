import React from "react";
{/* định nghĩa một đối tượng gồm hai thuộc tính là value và handleChange. 
Thuộc tính value là một chuỗi, còn handleChange là một hàm xử lý sự kiện, 
nhận đối số là một sự kiện kiểu React.ChangeEvent<HTMLInputElement> và trả về void.*/}
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return <input type="text" value={props.value} onChange={handleInputChange} />;
};
