import { FC } from 'react';
import { AppHeaderUI } from '@ui';
import { useSelector } from '../../services/store';
import { getUser } from '../../services/reducers/user/slice';

export const AppHeader: FC = () => {
  const { name } = useSelector(getUser);

  return <AppHeaderUI userName={name ? name : ''} />;
};
