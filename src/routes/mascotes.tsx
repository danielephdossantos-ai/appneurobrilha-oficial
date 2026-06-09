import { createFileRoute, Navigate } from '@tanstack/react-router';

export const Route = createFileRoute('/mascotes')({
  component: MascotesRedirect,
});

function MascotesRedirect() {
  return <Navigate to="/loja-mascotes" replace />;
}
