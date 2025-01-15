import { createFileRoute } from "@tanstack/react-router";
import { CreateContactPage } from "~/app/pages/contacts/create-contact-page";

export const Route = createFileRoute("/_contacts-layout/new-contact/")({
  component: CreateContactPage,
});
