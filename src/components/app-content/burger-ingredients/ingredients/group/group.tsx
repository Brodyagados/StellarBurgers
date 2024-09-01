import styles from './group.module.css';
import { Item } from '../item';
import { IngredientModel } from '../../../../../models';

type GroupProps = {
  text: string;
  items: IngredientModel[];
  onItemClick: (model: IngredientModel) => void;
};

const Group = ({ text, items, onItemClick }: GroupProps) => (
  <>
    <span className='text text_type_main-medium'>{text}</span>
    <ul className={`${styles.items} px-4 pt-6 pb-10`}>
      {items.map((item) => (
        <li key={item._id}>
          <Item data={item} onClick={() => onItemClick(item)} />
        </li>
      ))}
    </ul>
  </>
);

export default Group;
