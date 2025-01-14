import { createLazyFileRoute } from "@tanstack/react-router";
import { pages } from "~/app/pages";

export const Route = createLazyFileRoute("/_contacts-layout/$contactId")({
  component: pages.DetailedContactPage,
});
