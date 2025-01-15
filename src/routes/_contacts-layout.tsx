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
    <div className="flex items-start overflow-hidden">
      <Contacts initialContactId={params?.contactId || "1"} />
      <Outlet />
    </div>
  );
}
