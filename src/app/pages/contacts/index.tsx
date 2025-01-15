import { useQuery } from "@tanstack/react-query";
import { Navigate } from "@tanstack/react-router";
import { ContactAPI } from "~/entities/contact/api";

export function ContactsPage() {
  const { data, isLoading } = useQuery(ContactAPI.getContacts());

  if (isLoading) {
    return "...";
  }

  if (!data?.length) {
    return <Navigate to="/new-contact" />;
  }

  return (
    <Navigate to="/$contactId" params={{ contactId: String(data?.[0].id) }} />
  );
}
