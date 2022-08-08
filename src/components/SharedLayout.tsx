import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from './index';

const SharedLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
