import styles from './group.module.css';
import { Item } from '../item';
import { IngredientModel } from '../../../../../models';

type TGroupProps = {
  text: string;
  items: IngredientModel[];
};

const Group = ({ text, items }: TGroupProps) => (
  <>
    <span className='text text_type_main-medium'>{text}</span>
    <ul className={`${styles.items} px-4 pt-6 pb-10`}>
      {items.map((item) => (
        <li key={item._id}>
          <Item data={item} />
        </li>
      ))}
    </ul>
  </>
);

export default Group;
