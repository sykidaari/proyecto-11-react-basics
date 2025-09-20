import { cN } from '../../../utils/classNameManager';

const StyledImg = ({ src, externalSrc, alt, className }) => {
  return (
    <img
      src={src ? `/assets/imgs/${src}` : externalSrc}
      alt={alt}
      className={cN(
        'object-contain z-10 drop-shadow-xs drop-shadow-app-teal-800 rounded-md',
        className
      )}
    ></img>
  );
};

export default StyledImg;
