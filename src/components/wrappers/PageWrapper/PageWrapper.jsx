import { Outlet } from 'react-router-dom';

const PageWrapper = () => {
  return (
    <div className='max-w-4xl m-auto pt-16 pb-16 flex justify-center items-center min-h-dvh'>
      <Outlet />
    </div>
  );
};

export default PageWrapper;
