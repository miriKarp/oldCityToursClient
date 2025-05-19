import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../redux/store';

interface ProtectedRouteProps {
  children: JSX.Element;
  requireManager?: boolean;
}

export const ProtectedRoute = ({ children, requireManager = false }: ProtectedRouteProps) => {
  const { user } = useSelector((state: RootState) => state.user);

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  if (requireManager && !user.isManager) {
    return <Navigate to="/" replace />;
  }

  return children;
};