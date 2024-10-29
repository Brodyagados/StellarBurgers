import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styles from './profile-page.module.css';
import { AccountApi } from '../../api';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../../services/user/selectors';

const ProfilePage = () => {
  const initialState = useSelector(getUserSelector);
  const [actionsVisible, setActionsVisible] = useState(false);
  const [name, setName] = useState(initialState?.name);
  const [email, setEmail] = useState(initialState?.email);
  const [password, setPassword] = useState('');

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActionsVisible(true);
    setName(e.target.value);
  };
  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActionsVisible(true);
    setEmail(e.target.value);
  };
  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setActionsVisible(true);
    setPassword(e.target.value);
  };

  const handleResetClick = () => {
    setName(initialState?.name);
    setEmail(initialState?.email);
    setPassword('');
    setActionsVisible(false);
  };

  const handleSaveChanges = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const { success } = await AccountApi.edit({ name: name!, email: email!, password });

      if (success) {
        setActionsVisible(false);
      }
    },
    [name, email, password]
  );

  return (
    <form className={styles.container} onSubmit={handleSaveChanges}>
      <Input name='name' value={name ?? ''} placeholder='Имя' onChange={onNameChange} />
      <EmailInput name='email' value={email ?? ''} onChange={onEmailChange} />
      <PasswordInput name='password' value={password ?? ''} onChange={onPasswordChange} />
      {actionsVisible && (
        <div className={styles.actions}>
          <Button htmlType='button' type='secondary' onClick={handleResetClick}>
            Отмена
          </Button>
          <Button htmlType='submit'>Сохранить</Button>
        </div>
      )}
    </form>
  );
};

export default ProfilePage;
