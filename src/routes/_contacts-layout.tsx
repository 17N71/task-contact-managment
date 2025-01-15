import { createFileRoute, Outlet, useParams } from "@tanstack/react-router";
import { ContactLinkParams } from "~/entities/contact/model/types";
import { Contacts } from "~/entities/contact/ui";

export const Route = createFileRoute("/_contacts-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  const params: ContactLinkParams = useParams({
    from: "/_contacts-layout",
  });

  return (
    <div className="flex items-start px-4 py-5 gap-10">
      <Contacts initialContactId={params?.contactId || null} />
      <Outlet />
    </div>
  );
}
