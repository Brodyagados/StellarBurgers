import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './forgot-password-page.module.css';
import { routes } from '../../utils/constants';
import { AccountApi } from '../../api';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const onSubmit = useCallback(async () => {
    const { success } = await AccountApi.sendTokenForResetPassword({ email });
    if (success) {
      navigate(routes.RESET_PASSWORD);
    }
  }, [email]);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <span className='text text_type_main-medium'>Восстановление пароля</span>
        <EmailInput name='email' value={email} placeholder='Укажите e-mail' onChange={onEmailChange} />
        <Button htmlType='button' onClick={onSubmit}>
          Восстановить
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

export default LoginPage;
