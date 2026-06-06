import { createFileRoute } from '@tanstack/react-router';
import { LessonPlayer } from '../modules/escola-brilha/views/LessonPlayer';
import { EscolaBrilhaDashboard } from '../modules/escola-brilha/views/EscolaBrilhaDashboard';

export const Route = createFileRoute('/escola-brilha')({
  component: () => <EscolaBrilhaDashboard />,
});
