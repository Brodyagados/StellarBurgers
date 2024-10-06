import { Button, EmailInput, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { ChangeEvent, useCallback, useState } from 'react';
import styles from './profile-page.module.css';
import { AccountApi } from '../../api';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../../services/user/selectors';

const ProfilePage = () => {
  const initialState = useSelector(getUserSelector);
  const [actionsVisible, setActionsVisible] = useState(false);
  const [name, setName] = useState(initialState.name);
  const [email, setEmail] = useState(initialState.email);
  const [password, setPassword] = useState(initialState.password);

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
    setName(initialState.name);
    setEmail(initialState.email);
    setPassword(initialState.password);
    setActionsVisible(false);
  };

  const handleSaveChanges = useCallback(async () => {
    const { success } = await AccountApi.edit({ name, email, password });

    if (success) {
      setActionsVisible(false);
    }
  }, [name, email, password]);

  return (
    <div className={styles.container}>
      <Input name='name' value={name ?? ''} placeholder='Имя' onChange={onNameChange} />
      <EmailInput name='email' value={email ?? ''} onChange={onEmailChange} />
      <PasswordInput name='password' value={password ?? ''} onChange={onPasswordChange} />
      {actionsVisible && (
        <div className={styles.actions}>
          <Button htmlType='button' type='secondary' onClick={handleResetClick}>
            Отмена
          </Button>
          <Button htmlType='button' onClick={handleSaveChanges}>
            Сохранить
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
