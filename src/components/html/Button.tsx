import React from "react";
//định nghĩa các thuộc tính của props
type ButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "childern">;
export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
