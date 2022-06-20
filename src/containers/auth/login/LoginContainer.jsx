import { LoginComponent } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../../ducks/auth';
import { selectAuthError, selectUserInfo } from '../../../ducks/auth/selectors';

export function LoginContainer({ handleAuthOpenClose }) {
  const error = useSelector(selectAuthError);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const submitLogin = (userCredentials) => {
    dispatch(loginRequest(userCredentials));
    handleAuthOpenClose();
  };

  return (
    <LoginComponent
      submitLogin={submitLogin}
      error={error}
      userInfo={userInfo}
    />
  );
}
