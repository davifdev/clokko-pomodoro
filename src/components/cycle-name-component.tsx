import type { ReactNode } from 'react';

const CycleName = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-lg font-semibold text-blue-300 dark:text-slate-100">
      {children}
    </p>
  );
};

export default CycleName;
