import { createFileRoute, Outlet } from "@tanstack/react-router";
import { UsersList } from "~/entities/contact/ui/contacts-list";

export const Route = createFileRoute("/_contacts-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="text-blue-400 px-4 py-5">
        <br />
        <UsersList />
      </div>
      <Outlet />
    </div>
  );
}
