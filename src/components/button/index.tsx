import type { ComponentProps, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  color: "blue" | "red";
} & ComponentProps<"button">;

const Button = ({ children, type, color = "blue", ...props }: ButtonProps) => {
  return (
    <button
      type={type}
      {...props}
      className={
        color === "blue"
          ? `w-full m-w-full bg-blue-600 p-2 text-white rounded-2xl text-lg font-semibold cursor-pointer flex items-center justify-center gap-2`
          : `bg-red-600 p-2 text-white rounded-2xl text-lg font-semibold cursor-pointer flex items-center justify-center gap-2`
      }
    >
      {children}
    </button>
  );
};

export default Button;
