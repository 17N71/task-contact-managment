import { useParams } from "@tanstack/react-router";

export function DetailedContactPage() {
  const { contactId } = useParams({ from: "/_contacts-layout/$contactId" });

  return <div>DetailedContactPage {contactId}</div>;
}
