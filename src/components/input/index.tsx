import type { ComponentProps } from "react";

type InputProps = {
  labelText?: string;
} & ComponentProps<"input">;

const Input = ({ labelText, type, placeholder, id, defaultValue }: InputProps) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <label htmlFor={id}>{labelText}</label>
      <input
        placeholder={placeholder}
        type={type}
        className=" border-3 border-blue-200 p-2 rounded-lg bg-blue-50 text-center dark:bg-gray-900 dark:border-gray-800"
        id={id}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default Input;
