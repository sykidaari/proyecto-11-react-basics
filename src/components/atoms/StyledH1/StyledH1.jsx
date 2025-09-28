import { cN } from '../../../utils/classNameManager';

const StyledH1 = ({ children, className }) => {
  return (
    <h1
      className={cN('font-app-detail font-bold text-lg text-center', className)}
    >
      {children}
    </h1>
  );
};

export default StyledH1;
