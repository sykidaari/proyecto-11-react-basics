import { Link } from 'react-router-dom';
import { cN } from '../../../utils/classNameManager';

const CardGallery = ({ items, children, to, className }) => {
  return (
    <section className='m-auto pt-24'>
      <ul
        className={cN(
          ' flex flex-wrap justify-center items-center gap-5',
          className
        )}
      >
        {items.map((item) => (
          <li key={item.id}>
            {to ? (
              <Link to={`${to}/${item.id}`}>{children(item)}</Link>
            ) : (
              children(item)
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardGallery;
