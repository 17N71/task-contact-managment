import {
  createFileRoute,
  Outlet,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { ContactLinkParams } from "~/entities/contact/model/types";

export const Route = createFileRoute("/_contacts-layout/_fallback-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  const params: ContactLinkParams = useParams({
    from: "/_contacts-layout",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (params.contactId) {
      return;
    }
    navigate({ to: "/$contactId", params: { contactId: "1" } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
}
