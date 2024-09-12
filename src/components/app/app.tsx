import { useEffect } from 'react';
import { AppHeader } from '../app-header';
import { AppContent } from '../app-content';
import { useDispatch } from 'react-redux';
import { getIngredientsList } from '../../services/ingredients-list/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredientsList());
  }, []);

  return (
    <>
      <AppHeader />
      <AppContent />
    </>
  );
}

export default App;
