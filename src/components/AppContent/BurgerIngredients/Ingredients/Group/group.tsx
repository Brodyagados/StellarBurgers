import styles from './group.module.css';
import { IngredientModel } from '../ingredients';
import { Item } from '../Item';

type GroupProps = {
  text: string;
  items: IngredientModel[];
};

const Group = ({ text, items }: GroupProps) => (
  <div>
    <span className='text text_type_main-medium'>{text}</span>
    <ul className={`${styles.items} px-4 pt-6 pb-10`}>
      {items.map((item, itemIndex) => (
        <li key={itemIndex}>
          <Item data={item} />
        </li>
      ))}
    </ul>
  </div>
);

export default Group;
