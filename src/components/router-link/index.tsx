import type { ComponentProps, ReactNode } from "react";
import { Link } from "react-router-dom";

type RouterLinkProps = {
  children: ReactNode;
  href: string;
} & ComponentProps<"a">;

const RouterLink = ({ children, href, ...props }: RouterLinkProps) => {
  return (
    <Link
      to={href}
      {...props}
      className="flex items-center gap-2 text-sm sm:text-lg"
    >
      {children}
    </Link>
  );
};

export default RouterLink;
