import { Outlet } from 'react-router-dom';
import { AppHeader } from '../../components';

const HomeLayout = () => (
  <>
    <AppHeader />
    <Outlet />
  </>
);

export default HomeLayout;
