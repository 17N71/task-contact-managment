import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { UserAPI } from "~/entities/contact/api";
import { DetailedContactView } from "~/entities/contact/ui";

export function DetailedContactPage() {
  const { contactId } = useParams({ from: "/_contacts-layout/$contactId" });
  const { data: contact, isLoading } = useQuery(UserAPI.getUserById(contactId));

  if (isLoading) {
    return "...";
  }

  return <DetailedContactView contact={contact} />;
}
