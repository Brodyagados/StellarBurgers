import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';
import { ingredientType, ingredientTypeDescription } from '../../../../utils/constants';

const Tabs = () => {
  const [current, setCurrent] = useState<string>(ingredientType.Bun);
  return (
    <div className={`${styles.container} mt-5`}>
      <Tab value={ingredientType.Bun} active={current === ingredientType.Bun} onClick={setCurrent}>
        {ingredientTypeDescription[ingredientType.Bun]}
      </Tab>
      <Tab value={ingredientType.Sauce} active={current === ingredientType.Sauce} onClick={setCurrent}>
        {ingredientTypeDescription[ingredientType.Sauce]}
      </Tab>
      <Tab value={ingredientType.Main} active={current === ingredientType.Main} onClick={setCurrent}>
        {ingredientTypeDescription[ingredientType.Main]}
      </Tab>
    </div>
  );
};

export default Tabs;
