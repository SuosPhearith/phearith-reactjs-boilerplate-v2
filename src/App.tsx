import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import AdminRoute from './routes/AdminRoute';
import userRole from './utils/help/userRole';
import AuthenticationRoute from './routes/AuthenticationRoute';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();
  //::==>> get currect role in localstorage
  const role = localStorage.getItem('role');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  //::==>> start render route
  const renderRoutes = () => {
    //::==>> render page route by role
    if (role === userRole.admin) return <AdminRoute />;
    else return <AuthenticationRoute />;
  };
  //::==>> end render route

  return loading ? <Loader /> : <>{renderRoutes()}</>;
}

export default App;
