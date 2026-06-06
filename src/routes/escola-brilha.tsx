import { createFileRoute } from '@tanstack/react-router';
import { LessonPlayer } from '../modules/escola-brilha/views/LessonPlayer';

export const Route = createFileRoute('/escola-brilha')({
  component: () => <LessonPlayer />,
});
