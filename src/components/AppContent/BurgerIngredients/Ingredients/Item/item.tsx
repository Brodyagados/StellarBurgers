import { useState } from 'react';
import { IngredientModel } from '../../../../../models';
import { Modal } from '../../../../Modal';
import { IngredientDetails } from '../../IngredientDetails';
import styles from './item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

type ItemProps = {
  data: IngredientModel;
};

const Item = ({ data }: ItemProps) => {
  const [showDetail, setShowDetail] = useState<boolean>(false);

  const handleShowClick = () => setShowDetail(true);
  const handleCloseClick = () => setShowDetail(false);

  return (
    <div className={styles.container} onClick={handleShowClick}>
      <img className={`${styles.image} mx-4`} src={data.image} />
      <Counter count={1} size='default' extraClass='m-1' />
      <div className={styles.price}>
        <span className='text text_type_digits-default'>{data.price}</span>
        <CurrencyIcon type='primary' />
      </div>
      <span className={`${styles.title} text text_type_main-default`}>{data.name}</span>
      {showDetail && (
        <Modal title='Детали ингредиента' onCloseClick={handleCloseClick}>
          <IngredientDetails data={data} />
        </Modal>
      )}
    </div>
  );
};

export default Item;
