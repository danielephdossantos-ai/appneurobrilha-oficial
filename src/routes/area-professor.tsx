import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/area-professor")({ component: TeacherLayout });

function TeacherLayout() {
  return <Outlet />;
}
