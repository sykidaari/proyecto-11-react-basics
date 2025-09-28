import { NavLink } from 'react-router-dom';
import ContentBlock from '../../atoms/ContentBlock/ContentBlock';
import ContentBox from '../../atoms/ContentBox/ContentBox';
import { cN } from '../../../utils/classNameManager';

const PageMenu = ({ prefix, pages, to, pagenr }) => {
  const currentPageNr = pagenr ? Number(pagenr) : 1;

  return (
    <ContentBox className='mt-4 fixed z-50 backdrop-blur-xs'>
      <nav>
        <ul className='flex gap-2'>
          {pages.map((page) => {
            let linkTo;

            let firstOrLastPage;

            // Setup for "characters PageMenu"
            if (page === '<') {
              if (currentPageNr === 1) {
                firstOrLastPage = true;
              }
              linkTo = `${to}/${Number(currentPageNr) - 1}`;
            } else if (page === '>') {
              if (currentPageNr === 25) {
                firstOrLastPage = true;
              }
              linkTo = `${to}/${Number(currentPageNr) + 1}`;
            } else {
              linkTo = `${to}/${page}`;
            }

            return (
              <li key={page}>
                <ContentBlock className='from-app-sepia-400 border-app-sepia-600 text-app-sand-50 transition'>
                  <NavLink
                    to={linkTo}
                    className={({ isActive }) =>
                      cN(
                        'font-app-detail font-bold text-sm text-center min-w-7',
                        (isActive || (!pagenr && page === 1)) &&
                          'text-app-ink font-bold *:font-bold',
                        firstOrLastPage &&
                          'pointer-events-none text-app-sand-400'
                      )
                    }
                  >
                    <span className='font-normal'>{prefix}</span> {page}
                  </NavLink>
                </ContentBlock>
              </li>
            );
          })}
        </ul>
      </nav>
    </ContentBox>
  );
};

export default PageMenu;
