import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './register-page.module.css';
import { routes } from '../../utils/constants';
import { useDispatch } from 'react-redux';
import { signIn } from '../../services/user/actions';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // TODO: доработать типизацию на 5 спринте!!!
      //@ts-ignore
      dispatch(signIn({ name, email, password }));
      navigate(routes.HOME);
    },
    [name, email, password]
  );

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <span className='text text_type_main-medium'>Регистрация</span>
        <Input name='name' value={name} placeholder='Имя' onChange={onNameChange} />
        <EmailInput name='email' value={email} onChange={onEmailChange} />
        <PasswordInput name='password' value={password} onChange={onPasswordChange} />
        <Button htmlType='submit'>Зарегистрироваться</Button>
      </form>
      <div className={styles.links}>
        <span className='text text_type_main-default text_color_inactive'>
          Уже зарегистрированы? <Link to={routes.LOGIN}>Войти</Link>
        </span>
      </div>
    </div>
  );
};

export default RegisterPage;
