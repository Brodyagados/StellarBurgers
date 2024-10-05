import { useRef, useState } from 'react';
import styles from './burger-ingredients.module.css';
import { Ingredients } from './ingredients';
import { Tabs } from './tabs';
import { Title } from './title';
import { ingredientType } from '../../../utils/constants';

type TIngredientType = {
  type: string;
  tabOffset: number;
};

const BurgerIngredients = () => {
  const [activeTab, setActiveTab] = useState(ingredientType.Bun);

  const tabsRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLLIElement>(null);
  const sauceRef = useRef<HTMLLIElement>(null);
  const mainRef = useRef<HTMLLIElement>(null);

  const handleOnScroll = () => {
    const { y: tabsTop, height: tabsHeight } = tabsRef.current!.getBoundingClientRect();
    const { y: bunTop } = bunRef.current!.getBoundingClientRect();
    const { y: sauceTop } = sauceRef.current!.getBoundingClientRect();
    const { y: mainTop } = mainRef.current!.getBoundingClientRect();

    const tabsY = tabsTop + tabsHeight;

    const types: TIngredientType[] = [
      {
        type: ingredientType.Bun,
        tabOffset: Math.abs(tabsY - bunTop)
      },
      {
        type: ingredientType.Sauce,
        tabOffset: Math.abs(tabsY - sauceTop)
      },
      {
        type: ingredientType.Main,
        tabOffset: Math.abs(tabsY - mainTop)
      }
    ];

    const orderedTypes = types.sort((a, b) => a.tabOffset - b.tabOffset);
    setActiveTab(orderedTypes[0].type);
  };

  return (
    <div className={styles.container}>
      <Title text='Соберите бургер' />
      <Tabs ownRef={tabsRef} activeTab={activeTab} />
      <Ingredients bunRef={bunRef} sauceRef={sauceRef} mainRef={mainRef} onScroll={handleOnScroll} />
    </div>
  );
};

export default BurgerIngredients;
