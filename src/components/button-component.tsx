import type { ComponentProps, ReactNode } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

type ButtonVariants = VariantProps<typeof button> & ComponentProps<'button'>;
interface ButtonProps extends ButtonVariants {
  children: ReactNode;
  className?: string;
}

const button = tv({
  base: `disabled:opacity-50, flex items-center justify-center gap-2 rounded-md p-2 font-semibold text-white shadow-md transition-colors disabled:pointer-events-none`,
  variants: {
    color: {
      primary:
        'bg-blue-400 hover:bg-blue-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-slate-100',
      secondary: 'bg-red-500 hover:bg-red-600',
      icon: 'bg-transparent hover:bg-slate-200 dark:hover:bg-slate-800 shadow-none',
    },
    size: {
      sm: 'h-8 p-2',
      lg: 'h-11',
    },
  },
});

const Button = ({ children, className, color, ...props }: ButtonProps) => {
  return (
    <button className={button({ color, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
