import { Route, Routes } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import AdminLayout from '../layout/admin/AdminLayout';
import DashboardPage from '../pages/admin/DashboardPage';
import PersonalInformationPage from '../pages/admin/settings/PersonalInformationPage';
import LoggedPage from '../pages/admin/LoggedPage';
import AdvancedSettingsPage from '../pages/admin/AdvancedSettingsPage';
import NotFoundPage from '../pages/resource/404';

const AdminRoute = () => {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard" />
              <DashboardPage />
            </>
          }
        />
        <Route
          path="/logged"
          element={
            <>
              <PageTitle title="Logged" />
              <LoggedPage />
            </>
          }
        />
        <Route
          path="/settings/personal-information"
          element={
            <>
              <PageTitle title="Personal information" />
              <PersonalInformationPage />
            </>
          }
        />
        <Route
          path="/settings/advanced-settings"
          element={
            <>
              <PageTitle title="Advanced settings" />
              <AdvancedSettingsPage />
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

export default AdminRoute;
