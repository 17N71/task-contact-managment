import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_contacts-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div className="text-blue-400">
        <Link to=".">Home Contacts</Link>
        <br />
        <Link to="/$contactId" params={{ contactId: "123" }}>
          Contact
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
