
import { createFileRoute } from '@tanstack/react-router';
import { ProgressionDashboard } from '@/components/pedagogical/ProgressionDashboard';

export const Route = createFileRoute('/progressao')({
  component: ProgressionDashboard,
});
