import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { getIngredientsList } from '../../services/ingredients-list/actions';
import {
  FeedOrderPage,
  FeedPage,
  ForgotPasswordPage,
  HomePage,
  IngredientPage,
  LoginPage,
  ProfileOrderPage,
  ProfileOrdersPage,
  ProfilePage,
  RegisterPage,
  ResetPasswordPage
} from '../../pages';
import { routes } from '../../utils/constants';
import { HomeLayout, ProfileLayout } from '../../layouts';
import { Modal } from '../modal';
import { ProtectedRoute } from '../protected-route';
import { checkUserAuth } from '../../services/user/actions';
import { useDispatch } from '../../hooks';
import { clearOrderInfromation } from '../../services/order-detail/actions';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const backgroundLocation = location.state && location.state.backgroundLocation;

  useEffect(() => {
    dispatch(getIngredientsList());
    dispatch(checkUserAuth());
  }, []);

  const handleModalCloseClick = () => {
    navigate(-1);
  };

  const handleOrderModalCloseClick = () => {
    navigate(-1);
    dispatch(clearOrderInfromation());
  };

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route element={<HomeLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.LOGIN} element={<ProtectedRoute component={<LoginPage />} onlyUnAuth />} />
          <Route path={routes.REGISTER} element={<ProtectedRoute component={<RegisterPage />} onlyUnAuth />} />
          <Route path={routes.FORGOT_PASSWORD} element={<ProtectedRoute component={<ForgotPasswordPage />} onlyUnAuth />} />
          <Route path={routes.RESET_PASSWORD} element={<ProtectedRoute component={<ResetPasswordPage />} onlyUnAuth />} />
          <Route element={<ProfileLayout />}>
            <Route path={routes.PROFILE} element={<ProtectedRoute component={<ProfilePage />} />} />
            <Route path={routes.PROFILE_ORDERS} element={<ProtectedRoute component={<ProfileOrdersPage />} />} />
          </Route>
          <Route path={routes.INGREDIENT} element={<IngredientPage />} />
          <Route path={routes.FEED} element={<FeedPage />} />
          <Route path={routes.FEED_ORDER} element={<FeedOrderPage />} />
          <Route path={routes.PROFILE_ORDER} element={<ProtectedRoute component={<ProfileOrderPage />} />} />
        </Route>
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path={routes.INGREDIENT}
            element={
              <Modal title='Детали ингредиента' onCloseClick={handleModalCloseClick}>
                <IngredientPage />
              </Modal>
            }
          />
          <Route
            path={routes.FEED_ORDER}
            element={
              <Modal title='' onCloseClick={handleOrderModalCloseClick}>
                <FeedOrderPage />
              </Modal>
            }
          />
          <Route
            path={routes.PROFILE_ORDER}
            element={
              <Modal title='' onCloseClick={handleOrderModalCloseClick}>
                <ProfileOrderPage />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
