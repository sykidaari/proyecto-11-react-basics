import { Link } from 'react-router-dom';
import { cN } from '../../../utils/classNameManager';

const CardGallery = ({ items, children, to }) => {
  return (
    <section>
      <ul className={cN('flex flex-wrap justify-center items-center gap-5')}>
        {items.map((item) => (
          <Link to={`${to}/${item.id}`}>
            <li key={item.id}>{children(item)}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default CardGallery;
