import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="m-auto w-full max-w-7xl px-4">{children}</div>;
};

export default Container;
