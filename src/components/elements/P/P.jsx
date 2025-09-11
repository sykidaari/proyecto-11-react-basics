import clsx from 'clsx';

const P = ({ children, className }) => {
  return (
    <p className={clsx('text-sm text-balance text-center', className)}>
      {children}
    </p>
  );
};

export default P;
