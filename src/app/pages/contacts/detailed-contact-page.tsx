import { useQuery } from "@tanstack/react-query";
import { Navigate } from "@tanstack/react-router";
import { useParams } from "@tanstack/react-router";
import { ContactAPI } from "~/entities/contact/api";
import { DetailedContactView } from "~/entities/contact/ui";

export function DetailedContactPage() {
  const { contactId } = useParams({ from: "/_contacts-layout/$contactId" });
  const { data: contact, isLoading } = useQuery(
    ContactAPI.getUserById(contactId)
  );

  if (isLoading) {
    return "...";
  }

  if (!contact) {
    return <Navigate to="/contacts" />;
  }

  return <DetailedContactView contact={contact} />;
}
