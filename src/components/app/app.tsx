import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getIngredientsList } from '../../services/ingredients-list/actions';
import { ForgotPasswordPage, HomePage, LoginPage, RegisterPage, ResetPasswordPage } from '../../pages';
import { routes } from '../../utils/constants';
import { HomeLayout } from '../../layouts';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // TODO: доработать типизацию на 5 спринте!!!
    //@ts-ignore
    dispatch(getIngredientsList());
  }, []);

  return (
    <Router>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path={routes.HOME} element={<HomePage />} />
          <Route path={routes.LOGIN} element={<LoginPage />} />
          <Route path={routes.REGISTER} element={<RegisterPage />} />
          <Route path={routes.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
          <Route path={routes.RESET_PASSWORD} element={<ResetPasswordPage />} />
          <Route path={routes.ORDERS} element='' />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
