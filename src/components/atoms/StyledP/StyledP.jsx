import { cN } from '../../../utils/classNameManager';

const StyledP = ({ children, className }) => {
  return (
    <p className={cN('text-sm text-balance text-center', className)}>
      {children}
    </p>
  );
};

export default StyledP;
