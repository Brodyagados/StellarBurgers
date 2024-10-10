import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './reset-password-page.module.css';
import { routes } from '../../utils/constants';
import { AccountApi } from '../../api';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onTokenChange = (e: ChangeEvent<HTMLInputElement>) => setToken(e.target.value);

  const handleSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
      e.preventDefault();

      const { success } = await AccountApi.resetPassword({ password, token });
      if (success) {
        navigate(routes.LOGIN);
        localStorage.removeItem('isResetPassword');
      }
    },
    [password, token]
  );

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span className='text text_type_main-medium'>Восстановление пароля</span>
        <PasswordInput name='password' value={password} onChange={onPasswordChange} />
        <Input name='token' value={token} placeholder='Введите код из письма' onChange={onTokenChange} />
        <Button htmlType='submit'>Сохранить</Button>
      </form>
      <div className={styles.links}>
        <span className='text text_type_main-default text_color_inactive'>
          Вспомнили пароль? <Link to={routes.LOGIN}>Войти</Link>
        </span>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
