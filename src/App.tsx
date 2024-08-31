import { useEffect, useState } from 'react';
import './App.css';
import { AppContent, AppHeader } from './components';
import apiClient from './utils/api-client';
import { IngredientModel } from './models';

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
