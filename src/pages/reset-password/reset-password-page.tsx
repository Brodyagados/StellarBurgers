import { Button, Input } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './reset-password-page.module.css';
import { routes } from '../../utils/constants';
import { AccountApi } from '../../api';

type TPasswordInputType = 'password' | 'text';

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [passwordInputType, setPasswordInputType] = useState<TPasswordInputType>('password');

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const onTokenChange = (e: ChangeEvent<HTMLInputElement>) => setToken(e.target.value);

  const onPasswordShowClick = useCallback(
    () => setPasswordInputType(passwordInputType === 'password' ? 'text' : 'password'),
    [passwordInputType]
  );

  const onSubmit = useCallback(async () => {
    const { success } = await AccountApi.resetPassword({ password, token });
    if (success) {
      navigate(routes.LOGIN);
    }
  }, [password, token]);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <span className='text text_type_main-medium'>Восстановление пароля</span>
        <Input
          name='password'
          value={password}
          type={passwordInputType}
          placeholder='Введите новый пароль'
          onChange={onPasswordChange}
          icon={passwordInputType === 'password' ? 'ShowIcon' : 'HideIcon'}
          onIconClick={onPasswordShowClick}
        />
        <Input name='token' value={token} placeholder='Введите код из письма' onChange={onTokenChange} />
        <Button htmlType='button' onClick={onSubmit}>
          Сохранить
        </Button>
      </div>
      <div className={styles.links}>
        <span className='text text_type_main-default text_color_inactive'>
          Вспомнили пароль? <Link to={routes.LOGIN}>Войти</Link>
        </span>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
