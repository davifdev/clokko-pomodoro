import type { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}
const Title = ({ children }: TitleProps) => {
  return <h2 className="text-3xl mb-4 font-semibold">{children}</h2>;
};

export default Title;
