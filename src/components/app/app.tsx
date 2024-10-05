import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getIngredientsList } from '../../services/ingredients-list/actions';
import { HomePage, LoginPage } from '../../pages';

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
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
