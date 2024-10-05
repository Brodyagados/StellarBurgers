import { Button, EmailInput, Input, ShowIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login-page.module.css';

type TPasswordInputType = 'password' | 'text';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordInputType, setPasswordInputType] = useState<TPasswordInputType>('password');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const onPasswordShowClick = useCallback(
    () => setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password'),
    [passwordInputType]
  );

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <span className='text text_type_main-medium'>Вход</span>
        <EmailInput name='email' value={email} onChange={onEmailChange} />
        <Input
          name='password'
          value={password}
          type={passwordInputType}
          placeholder='Пароль'
          onChange={onPasswordChange}
          icon={passwordInputType === 'password' ? 'ShowIcon' : 'HideIcon'}
          onIconClick={onPasswordShowClick}
        />
        <Button htmlType='button'>Войти</Button>
      </div>
      <div className={styles.links}>
        <span className='text text_type_main-default text_color_inactive'>
          Вы - новый пользователь? <Link to='/register'>Зарегистрироваться</Link>
        </span>
        <span className='text text_type_main-default text_color_inactive'>
          Забыли пароль? <Link to='/forgot-password'>Восстановить пароль</Link>
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
