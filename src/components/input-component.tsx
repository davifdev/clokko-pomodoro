import type { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  className?: string;
  label?: string;
}

const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col text-left">
      <label htmlFor={props.id} className="font-bold text-lime-800">
        {label}
      </label>
      <input
        {...props}
        className={`rounded-md bg-zinc-50 p-2 text-center text-lime-800 outline-0 ${className}`}
      />
    </div>
  );
};

export default Input;
