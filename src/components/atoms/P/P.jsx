import { cN } from '../../../utils/classNameManager';

const P = ({ children, className }) => {
  return (
    <p className={cN('text-sm text-balance text-center', className)}>
      {children}
    </p>
  );
};

export default P;
