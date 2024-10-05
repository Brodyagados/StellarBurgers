import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './register-page.module.css';
import { routes } from '../../utils/constants';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <span className='text text_type_main-medium'>Регистрация</span>
        <Input name='name' value={name} placeholder='Имя' onChange={onNameChange} />
        <EmailInput name='email' value={email} onChange={onEmailChange} />
        <PasswordInput name='password' value={password} onChange={onPasswordChange} />
        <Button htmlType='button'>Зарегистрироваться</Button>
      </div>
      <div className={styles.links}>
        <span className='text text_type_main-default text_color_inactive'>
          Уже зарегистрированы? <Link to={routes.LOGIN}>Войти</Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
