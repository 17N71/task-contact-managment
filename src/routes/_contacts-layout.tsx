import { createFileRoute, Outlet } from "@tanstack/react-router";
import { UsersList } from "~/entities/contact/ui";

export const Route = createFileRoute("/_contacts-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex items-start px-4 py-5 gap-10">
      <UsersList />
      <Outlet />
    </div>
  );
}
