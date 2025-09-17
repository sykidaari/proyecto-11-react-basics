import { cN } from '../../../utils/classNameManager';

const ContentBox = (props) => {
  const { as: Tag = 'div', className, children } = props;

  return (
    <Tag
      className={cN(
        ' bg-gradient-to-b from-app-teal-500/50 to-app-teal-500/10 p-5 rounded-lg flex flex-col justify-center gap-5',
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default ContentBox;
