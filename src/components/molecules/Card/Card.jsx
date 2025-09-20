import { Link } from 'react-router-dom';
import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import ContentBox from '../../atoms/ContentBox/ContentBox';
import StyledH2 from '../../atoms/StyledH2/StyledH2';
import { cN } from '../../../utils/classNameManager';

const Card = ({ title, children, className, titleBlockClassName }) => {
  return (
    <ContentBox
      as='article'
      className={cN('p-3 hover:scale-105 transition gap-3 m-auto', className)}
    >
      <ContentBlock className={titleBlockClassName}>
        <StyledH2>{title}</StyledH2>
      </ContentBlock>
      {children}
    </ContentBox>
  );
};

export default Card;
