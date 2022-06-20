import { SignUpComponent } from '../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../../../ducks/auth';
import { selectAuthError } from '../../../ducks/auth/selectors';

export function SignUpContainer({ handleAuthOpenClose }) {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const submitSignUp = (userInfo) => {
    dispatch(signUpRequest(userInfo));
    handleAuthOpenClose();
  };

  return <SignUpComponent submitSignUp={submitSignUp} error={error} />;
}
