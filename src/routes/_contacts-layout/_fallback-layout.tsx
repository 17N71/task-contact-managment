import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_contacts-layout/_fallback-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
