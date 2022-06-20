import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './consts';
import { HomeComponent } from './components';
import { ErrorCheck } from './components/errorCheck/ErrorCheck';
import { ProfileContainer } from './containers/profile/ProfileContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ErrorCheck />}>
          <Route path={ROUTES.HOME} element={<HomeComponent />} />
          <Route path={ROUTES.PROFILE} element={<ProfileContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
