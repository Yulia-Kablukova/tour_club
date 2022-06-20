import { AuthTabComponent } from '../../../components';

export function AuthTabContainer({ initialTab, handleAuthOpenClose }) {
  return (
    <AuthTabComponent
      initialTab={initialTab}
      handleAuthOpenClose={handleAuthOpenClose}
    />
  );
}
