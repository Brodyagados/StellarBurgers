import { useEffect, useState } from 'react';
import apiClient from '../../utils/api-client';
import { IngredientModel } from '../../models';
import { AppHeader } from '../app-header';
import { AppContent } from '../app-content';

function App() {
  const [ingredients, setIngredients] = useState<IngredientModel[]>([]);

  useEffect(() => {
    const getIngredients = async () => {
      const data = await apiClient.request<IngredientModel[]>('/ingredients');
      setIngredients(data);
    };

    getIngredients();
  }, []);

  return (
    <>
      <AppHeader />
      <AppContent ingredients={ingredients} />
    </>
  );
}

export default App;
