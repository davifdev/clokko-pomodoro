import type { ReactNode } from 'react';

interface CycleNameProps {
  children: ReactNode;
}

const CycleName = ({ children }: CycleNameProps) => {
  return (
    <div
      className={`h-7 text-sm font-semibold text-blue-300 md:text-lg dark:text-slate-100`}
    >
      {children}
    </div>
  );
};

export default CycleName;
