import { Outlet } from 'react-router-dom';

import Header from '../Navbar';
import Footer from '../Footer';
import BreadCrumbs from '../BreadCrumbs';

const Layout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>
        <BreadCrumbs />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
