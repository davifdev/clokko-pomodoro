import type { ComponentProps, ReactNode } from 'react';
interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`disabled:opacity-50, flex items-center justify-center gap-2 rounded-md bg-sky-500 p-2 font-semibold text-white shadow-md transition-colors hover:bg-sky-600 disabled:pointer-events-none dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
