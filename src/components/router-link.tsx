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
        isActive
          ? 'text-sky-600 dark:text-slate-300'
          : 'text-sky-500 dark:text-slate-100'
      }
    >
      <strong>{text}</strong>
    </NavLink>
  );
};

export default RouterLink;
