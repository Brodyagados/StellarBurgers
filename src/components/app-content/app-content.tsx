import styles from './app-content.module.css';
import { BurgerConstructor } from './burger-constructor';
import { BurgerIngredients } from './burger-ingredients';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const AppContent = () => (
  <DndProvider backend={HTML5Backend}>
    <div className={styles.container}>
      <BurgerIngredients />
      <BurgerConstructor />
    </div>
  </DndProvider>
);

export default AppContent;
