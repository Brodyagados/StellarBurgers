import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { getIngredientsList } from '../../services/ingredients-list/actions';
import { ForgotPasswordPage, HomePage, LoginPage, ProfilePage, RegisterPage, ResetPasswordPage } from '../../pages';
import { routes } from '../../utils/constants';
import { HomeLayout, ProfileLayout } from '../../layouts';
import { IngredientDetails } from '../app-content/burger-ingredients/ingredient-details';
import { Modal } from '../modal';
import { ProtectedRoute } from '../protected-route';
import { checkUserAuth } from '../../services/user/actions';
import { useDispatch } from '../../hooks';
import { FeedPage } from '../../pages/feed';
import { OrderInformation } from '../order-information';
import { ProfileOrdersPage } from '../../pages/profile-orders';

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
          <Route path={routes.INGREDIENT} element={<IngredientDetails />} />
          <Route path={routes.FEED} element={<FeedPage />} />
          <Route path={routes.FEED_ORDER} element={<OrderInformation />} />
          <Route path={routes.PROFILE_ORDER} element={<OrderInformation />} />
        </Route>
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path={routes.INGREDIENT}
            element={
              <Modal title='Детали ингредиента' onCloseClick={handleModalCloseClick}>
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path={routes.FEED_ORDER}
            element={
              <Modal title='' onCloseClick={handleModalCloseClick}>
                <OrderInformation />
              </Modal>
            }
          />
          <Route
            path={routes.PROFILE_ORDER}
            element={
              <Modal title='' onCloseClick={handleModalCloseClick}>
                <OrderInformation />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
