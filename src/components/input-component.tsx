import type { ComponentProps } from 'react';
interface InputProps extends ComponentProps<'input'> {
  className?: string;
  label?: string;
}

const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col text-left">
      <label
        htmlFor={props.id}
        className="font-bold text-sky-500 dark:text-slate-100"
      >
        {label}
      </label>
      <input
        {...props}
        className={`rounded-md bg-zinc-50 p-2 text-center text-sky-500 outline-0 placeholder:text-sky-400 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-100 ${className}`}
      />
    </div>
  );
};

export default Input;
