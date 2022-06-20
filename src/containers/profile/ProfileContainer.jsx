import { ProfileComponent } from '../../components/profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserInfo } from '../../ducks/auth/selectors';
import React from 'react';
import { fetchUserInfoByTokenRequest, logoutRequest } from '../../ducks/auth';
import { selectUsers } from '../../ducks/profile/users/selectors';
import { fetchUsersRequest } from '../../ducks/profile/users';
import { ROUTES } from '../../consts';
import { useNavigate } from 'react-router-dom';

export function ProfileContainer() {
  const navigate = useNavigate();
  const userInfo = useSelector(selectUserInfo);
  const userInfoPatch = {
    login: 'abcd',
    name: 'Олег',
    surname: 'Иванов',
    patronymic: 'Иванович',
    birthday: '1970.01.02',
    phone: '8-800-555-3535',
    email: 'example@gmail.com',
    gender: 'мужской',
    role: 'ADMIN',
  };
  const users = useSelector(selectUsers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUserInfoByTokenRequest());
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const submitLogout = () => {
    dispatch(logoutRequest());
    navigate(ROUTES.HOME);
  };

  const submitGoHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <ProfileComponent
      userInfo={userInfo}
      users={users}
      submitLogout={submitLogout}
      submitGoHome={submitGoHome}
    />
  );
}
