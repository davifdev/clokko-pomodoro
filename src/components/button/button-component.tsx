import type { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`disabled:opacity-50, flex items-center justify-center rounded-md bg-lime-500 p-2 font-semibold text-white transition-colors hover:bg-lime-600 disabled:pointer-events-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
