import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './forgot-password-page.module.css';
import { routes } from '../../utils/constants';
import { AccountApi } from '../../api';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { success } = await AccountApi.sendTokenForResetPassword({ email });
      if (success) {
        localStorage.setItem('isResetPassword', 'true');
        navigate(routes.RESET_PASSWORD);
      }
    },
    [email]
  );

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span className='text text_type_main-medium'>Восстановление пароля</span>
        <EmailInput name='email' value={email} placeholder='Укажите e-mail' onChange={onEmailChange} />
        <Button htmlType='submit'>Восстановить</Button>
      </form>
      <div className={styles.links}>
        <span className='text text_type_main-default text_color_inactive'>
          Вспомнили пароль? <Link to={routes.LOGIN}>Войти</Link>
        </span>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
