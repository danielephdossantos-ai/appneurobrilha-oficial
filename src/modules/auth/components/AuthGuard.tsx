import React from 'react';
import { Navigate, useLocation } from '@tanstack/react-router';
import { useAuth } from '@/modules/auth/hooks/useAuth';

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const location = useLocation();
  const { isLoading, isAuthenticated } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-sidebar grid place-items-center p-4">
        <div className="flex flex-col items-center gap-4">
          <div className="h-20 w-20 rounded-[2rem] bg-gradient-to-br from-primary to-success grid place-items-center text-5xl shadow-glow transform -rotate-6">
            🌱
          </div>
          <div className="flex items-center gap-2 text-lg font-bold text-foreground">
            Autenticando...
          </div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated && location.pathname !== '/auth') {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};
