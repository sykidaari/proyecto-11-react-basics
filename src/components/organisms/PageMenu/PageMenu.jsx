import { NavLink, useParams } from 'react-router-dom';
import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import ContentBox from '../../atoms/ContentBox/ContentBox';
import { cN } from '../../../utils/classNameManager';

const PageMenu = ({ prefix, pages, to }) => {
  const { pagenr } = useParams();

  return (
    <ContentBox className='mt-4'>
      <nav>
        <ul className='flex gap-2'>
          {pages.map((page) => (
            <li key={page}>
              <ContentBlock className='from-app-sepia-400 border-app-sepia-600 text-app-sand-50 transition'>
                <NavLink
                  to={`${to}/${page}`}
                  className={({ isActive }) =>
                    cN(
                      'font-app-detail font-bold text-sm text-center ',
                      (isActive || (!pagenr && page === 1)) &&
                        'text-app-ink font-bold *:font-bold'
                    )
                  }
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
