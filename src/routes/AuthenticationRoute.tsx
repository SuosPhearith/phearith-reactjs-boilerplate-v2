import { Route, Routes } from 'react-router-dom';
import AuthenticationLayout from '../layout/authentication/AuthenticationLayout';
import PageTitle from '../components/PageTitle';
import SignIn from '../pages/Authentication/SignIn';
import NotFoundPage from '../pages/resource/404';

const AuthenticationRoute = () => {
  return (
    <Routes>
      <Route element={<AuthenticationLayout />}>
        <Route
          index
          element={
            <>
              <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <PageTitle title="404" />
              <NotFoundPage />
            </>
          }
        />
      </Route>
    </Routes>
  );
};

export default AuthenticationRoute;
