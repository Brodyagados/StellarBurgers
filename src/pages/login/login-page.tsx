import { Button, EmailInput, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login-page.module.css';
import { routes } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { login } from '../../services/user/actions';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
      e.preventDefault();
      // TODO: доработать типизацию на 5 спринте!!!
      //@ts-ignore
      dispatch(login({ email, password }));
    },
    [email, password]
  );

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span className='text text_type_main-medium'>Вход</span>
        <EmailInput name='email' value={email} onChange={onEmailChange} />
        <PasswordInput name='password' value={password} onChange={onPasswordChange} />
        <Button htmlType='submit'>Войти</Button>
      </form>
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
