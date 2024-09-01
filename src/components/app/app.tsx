import { useEffect, useState } from 'react';
import apiClient from '../../utils/api-client';
import { IngredientModel } from '../../models';
import { AppHeader } from '../app-header';
import { AppContent } from '../app-content';

function App() {
  const [ingredients, setIngredients] = useState<IngredientModel[]>([]);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const data = await apiClient.request<IngredientModel[]>('/ingredients');
        setIngredients(data);
      } catch (e) {
        alert(`Ошибка получения списка ингредиентов (${(e as Error).message})`);
      }
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
