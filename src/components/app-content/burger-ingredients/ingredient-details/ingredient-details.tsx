import styles from './ingredient-details.module.css';
import { Macronutrient } from './macronutrient';
import { useParams } from 'react-router-dom';
import { getIngredientByIdSelector } from '../../../../services/ingredients-list/selectors';
import { RootState } from '../../../../services';
import { useSelector } from '../../../../hooks';

const IngredientDetails = () => {
  const { id } = useParams();
  const data = useSelector((store: RootState) => getIngredientByIdSelector(store, id!));

  return (
    <div className={styles.container}>
      {data ? (
        <>
          <img src={data.image_large} alt={`${data.name}.`} />
          <span className='text text_type_main-medium mt-4'>{data.name}</span>
          <div className={`${styles.macronutrients} mt-8`}>
            <Macronutrient name='Калории, ккал' value={data.proteins} />
            <Macronutrient name='Белки, г' value={data.fat} />
            <Macronutrient name='Жиры, г' value={data.carbohydrates} />
            <Macronutrient name='Углеводы, г' value={data.calories} />
          </div>
        </>
      ) : (
        <span className='text text_type_main-medium mt-4'>Загрузка данных...</span>
      )}
    </div>
  );
};

export default IngredientDetails;
