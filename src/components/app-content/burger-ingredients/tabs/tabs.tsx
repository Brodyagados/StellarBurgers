import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './tabs.module.css';
import { ingredientType, ingredientTypeDescription } from '../../../../utils/constants';

type TTabsProps = {
  ownRef: React.LegacyRef<HTMLDivElement>;
  activeTab: string;
};

const Tabs = ({ ownRef, activeTab }: TTabsProps) => {
  return (
    <div className={`${styles.container} mt-5`} ref={ownRef}>
      <Tab value={ingredientType.Bun} active={activeTab === ingredientType.Bun} onClick={() => {}}>
        {ingredientTypeDescription[ingredientType.Bun]}
      </Tab>
      <Tab value={ingredientType.Sauce} active={activeTab === ingredientType.Sauce} onClick={() => {}}>
        {ingredientTypeDescription[ingredientType.Sauce]}
      </Tab>
      <Tab value={ingredientType.Main} active={activeTab === ingredientType.Main} onClick={() => {}}>
        {ingredientTypeDescription[ingredientType.Main]}
      </Tab>
    </div>
  );
};

export default Tabs;
