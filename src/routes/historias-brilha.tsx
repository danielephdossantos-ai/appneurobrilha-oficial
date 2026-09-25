import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/historias-brilha")({ component: () => <Outlet /> });
