import { createFileRoute } from '@tanstack/react-router';
import MascotStorePage from '@/pages/MascotStore';

export const Route = createFileRoute('/loja-mascotes')({
  component: MascotStorePage,
});
