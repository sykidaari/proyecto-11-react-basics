import { NavLink } from 'react-router-dom';
import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import ContentBox from '../../atoms/ContentBox/ContentBox';
import { cN } from '../../../utils/classNameManager';

const PageMenu = ({ pages, prefix }) => {
  return (
    <ContentBox>
      <nav>
        <ul className='flex gap-2'>
          {pages.map((page) => (
            <li key={page}>
              <ContentBlock className='from-app-sepia-400 border-app-sepia-600 text-app-sand-50 transition hover:scale-105'>
                <NavLink
                  className={cN(
                    'font-app-detail font-bold text-sm text-center '
                  )}
                >
                  <span className='font-normal'>{prefix}</span> {page}
                </NavLink>
              </ContentBlock>
            </li>
          ))}
        </ul>
      </nav>
    </ContentBox>
  );
};

export default PageMenu;
