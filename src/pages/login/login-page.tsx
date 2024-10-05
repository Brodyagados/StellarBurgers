import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login-page.module.css';
import { routes } from '../../utils/constants';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <span className='text text_type_main-medium'>Вход</span>
        <EmailInput name='email' value={email} onChange={onEmailChange} />
        <PasswordInput name='password' value={password} onChange={onPasswordChange} />
        <Button htmlType='button'>Войти</Button>
      </div>
      <div className={styles.links}>
        <span className='text text_type_main-default text_color_inactive'>
          Вы - новый пользователь? <Link to={routes.REGISTER}>Зарегистрироваться</Link>
        </span>
        <span className='text text_type_main-default text_color_inactive'>
          Забыли пароль? <Link to={routes.FORGOT_PASSWORD}>Восстановить пароль</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
