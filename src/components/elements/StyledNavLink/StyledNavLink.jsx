import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const StyledNavLink = ({ to, className, children, ...props }) => {
  const baseClass =
    'block font-app-titles text-2xl  bg-radial to-150%  border-2 rounded-md px-3 py-0.5 scale-100 hover:scale-110 transition';
  const underLineClass =
    'relative after:content-[""] after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:bg-current after:scale-x-0 after:origin-center after:transition after:duration-300  after:rounded-full';

  return (
    <NavLink
      to={to}
      {...props}
      className={({ isActive }) =>
        clsx(
          baseClass,
          underLineClass,
          'hover:after:scale-x-85',
          isActive
            ? ' border-app-gold-500  from-app-gold-100 to-app-gold-400 text-app-sand-50 after:scale-x-85'
            : ' border-app-teal-500 from-app-teal-100 to-app-teal-400 text-app-gold-800',
          className
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
