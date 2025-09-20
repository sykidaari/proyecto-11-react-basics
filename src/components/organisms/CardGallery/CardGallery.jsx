import { Link } from 'react-router-dom';
import { cN } from '../../../utils/classNameManager';

const CardGallery = ({ items, children, to }) => {
  return (
    <section className=' m-auto'>
      <ul className={cN(' flex flex-wrap justify-center items-center gap-5 ')}>
        {items.map((item) => (
          <Link to={`${to}/${item.id}`} key={item.id}>
            <li>{children(item)}</li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default CardGallery;
