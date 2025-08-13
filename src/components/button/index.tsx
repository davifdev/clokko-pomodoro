import type { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentProps<"button">;

const Button = ({ children, type, ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
