import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/escola-brilha')({
  component: () => <Outlet />,
});
