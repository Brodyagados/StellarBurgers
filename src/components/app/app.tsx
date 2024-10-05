import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getIngredientsList } from '../../services/ingredients-list/actions';
import { ForgotPasswordPage, HomePage, LoginPage, ProfilePage, RegisterPage, ResetPasswordPage } from '../../pages';
import { routes } from '../../utils/constants';
import { HomeLayout, ProfileLayout } from '../../layouts';
import { IngredientDetails } from '../app-content/burger-ingredients/ingredient-details';
import { Modal } from '../modal';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const backgroundLocation = location.state && location.state.backgroundLocation;

  useEffect(() => {
    // TODO: доработать типизацию на 5 спринте!!!
    //@ts-ignore
    dispatch(getIngredientsList());
  }, []);

  const handleIngredientDetailCloseClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Routes location={backgroundLocation || location}>
        <Route element={<HomeLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.REGISTER} element={<RegisterPage />} />
          <Route path={routes.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
          <Route path={routes.RESET_PASSWORD} element={<ResetPasswordPage />} />
          <Route element={<ProfileLayout />}>
            <Route path={routes.PROFILE} element={<ProfilePage />} />
            <Route path={routes.PROFILE_ORDERS} element='' />
          </Route>
          <Route path={routes.INGREDIENT} element={<IngredientDetails />} />
          <Route path={routes.ORDERS} element='' />
        </Route>
      </Routes>

      {backgroundLocation && (
        <Routes>
          <Route
            path={routes.INGREDIENT}
            element={
              <Modal title='Детали ингредиента' onCloseClick={handleIngredientDetailCloseClick}>
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
