import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { UserAPI } from "~/entities/contact/api";

export function DetailedContactPage() {
  const { contactId } = useParams({ from: "/_contacts-layout/$contactId" });
  const { data, isLoading } = useQuery(UserAPI.getUserById(contactId));
  if (isLoading) {
    return "...";
  }
  return <div>{data?.[0]?.name}</div>;
}
