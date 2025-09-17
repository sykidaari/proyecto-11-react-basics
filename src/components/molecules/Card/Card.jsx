import { Link } from 'react-router-dom';
import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import ContentBox from '../../atoms/ContentBox/ContentBox';
import H2 from '../../atoms/H2/H2';
import { cN } from '../../../utils/classNameManager';

const Card = ({ title, children, boxClassName, titleBlockClassName }) => {
  return (
    <ContentBox
      as='article'
      className={cN('p-3 hover:scale-105 transition gap-3', boxClassName)}
    >
      <ContentBlock className={titleBlockClassName}>
        <H2>{title}</H2>
      </ContentBlock>
      {children}
    </ContentBox>
  );
};

export default Card;
