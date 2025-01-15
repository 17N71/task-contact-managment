import { createLazyFileRoute } from "@tanstack/react-router";
import { pages } from "~/app/pages";

export const Route = createLazyFileRoute(
  "/_contacts-layout/_fallback-layout/$contactId"
)({
  component: pages.DetailedContactPage,
});
