import type { ReactNode } from 'react';

const CycleName = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-lg font-semibold text-sky-500 dark:text-slate-100">
      {children}
    </p>
  );
};

export default CycleName;
