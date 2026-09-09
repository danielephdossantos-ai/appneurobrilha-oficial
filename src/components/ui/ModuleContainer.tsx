import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

interface ModuleContainerProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const ModuleContainer: React.FC<ModuleContainerProps> = ({ children, fallback }) => {
  return (
    <ErrorBoundary fallback={<div>Algo deu errado neste módulo.</div>}>
      <Suspense fallback={fallback || <div>Carregando módulo...</div>}>{children}</Suspense>
    </ErrorBoundary>
  );
};
