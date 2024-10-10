import styles from './macronutrient.module.css';

type TMacronutrientProps = {
  name: string;
  value: number;
};

const Macronutrient = ({ name, value }: TMacronutrientProps) => (
  <div className={styles.container}>
    <span className='text text_type_main-default text_color_inactive'>{name}</span>
    <span className='text text_type_digits-default text_color_inactive'>{value}</span>
  </div>
);

export default Macronutrient;
