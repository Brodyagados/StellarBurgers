import styles from './ingredient-details.module.css';
import { IngredientModel } from '../../../../models';
import { Macronutrient } from './macronutrient';

type IngredientDetailsProps = {
  data: IngredientModel;
};

const IngredientDetails = ({ data }: IngredientDetailsProps) => (
  <div className={styles.container}>
    <img src={data.image_large} alt={`${data.name}.`} />
    <span className='text text_type_main-medium mt-4'>{data.name}</span>
    <div className={`${styles.macronutrients} mt-8`}>
      <Macronutrient name='Калории, ккал' value={data.proteins} />
      <Macronutrient name='Белки, г' value={data.fat} />
      <Macronutrient name='Жиры, г' value={data.carbohydrates} />
      <Macronutrient name='Углеводы, г' value={data.calories} />
    </div>
  </div>
);

export default IngredientDetails;
