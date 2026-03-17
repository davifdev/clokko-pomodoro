// Lib
import { NavLink } from 'react-router-dom';

interface RouterLinkProps {
  href: string;
  text: string;
}

const RouterLink = ({ href, text }: RouterLinkProps) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive ? 'dark:text-slate-80 opacity-70' : 'dark:text-slate-50'
      }
    >
      <strong>{text}</strong>
    </NavLink>
  );
};

export default RouterLink;
