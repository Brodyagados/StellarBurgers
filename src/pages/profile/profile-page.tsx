import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, useState } from 'react';
import styles from './profile-page.module.css';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../../services/user/selectors';

const ProfilePage = () => {
  const data = useSelector(getUserSelector);
  console.log(data);

  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [password, setPassword] = useState('');

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <div className={styles.container}>
      <Input name='name' value={name ?? ''} placeholder='Имя' onChange={onNameChange} />
      <EmailInput name='email' value={email ?? ''} onChange={onEmailChange} />
      <PasswordInput name='password' value={password} onChange={onPasswordChange} />
      <div className={styles.actions}>
        <Button htmlType='button' type='secondary'>
          Отмена
        </Button>
        <Button htmlType='button'>Сохранить</Button>
      </div>
    </div>
  );
};

export default ProfilePage;
