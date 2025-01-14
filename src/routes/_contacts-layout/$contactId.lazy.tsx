import { createLazyFileRoute } from "@tanstack/react-router";
import { pages } from "~/pages";

export const Route = createLazyFileRoute("/_contacts-layout/$contactId")({
  component: pages.DetailedContactPage,
});
