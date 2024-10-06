import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthCheckedSelector } from '../../services/user/selectors';
import { routes } from '../../utils/constants';

type TProtectedRouteProps = {
  component: React.ReactNode;
  onlyUnAuth?: boolean;
};

const ProtectedRoute = ({ component, onlyUnAuth = false }: TProtectedRouteProps) => {
  const location = useLocation();
  const { user, isAuthChecked } = useSelector(getUserAuthCheckedSelector);

  if (!isAuthChecked) {
    return <span>Загрузка...</span>;
  }

  if (user && onlyUnAuth) {
    const { from } = location.state || { from: { pathname: '/' } };

    return <Navigate to={from} />;
  }

  if (!user && !onlyUnAuth) {
    return <Navigate to={routes.LOGIN} state={{ from: location }} />;
  }

  if (location.pathname === routes.RESET_PASSWORD && !localStorage.getItem('isResetPassword')) {
    return <Navigate to={routes.LOGIN} />;
  }

  return component;
};

export default ProtectedRoute;
