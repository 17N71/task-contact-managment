import { createFileRoute } from "@tanstack/react-router";
import { pages } from "~/app/pages";

export const Route = createFileRoute("/_contacts-layout/contacts")({
  component: pages.Contacts,
});
