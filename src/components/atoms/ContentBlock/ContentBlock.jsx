import { cN } from '../../../utils/classNameManager';

const ContentBlock = ({ className, children, ...props }) => {
  return (
    <div
      className={cN(
        'border border-app-sepia rounded-md p-2 bg-radial to-300% from-app-sepia-50 to-app-sepia-600 flex justify-center items-center',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContentBlock;
