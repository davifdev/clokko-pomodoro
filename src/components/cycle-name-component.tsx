import type { ReactNode } from 'react';

const CycleName = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-sm font-semibold text-blue-300 md:text-lg dark:text-slate-100">
      {children}
    </p>
  );
};

export default CycleName;
