import { useQuery } from "@tanstack/react-query";
import { Navigate } from "@tanstack/react-router";
import { useParams } from "@tanstack/react-router";
import { useShallow } from "zustand/shallow";
import { ContactAPI } from "~/entities/contact/api";
import { useContactStore } from "~/entities/contact/model/store/contact";
import { DetailedContactView } from "~/entities/contact/ui";
import { ContactEditForm } from "~/entities/contact/ui/contact-edit-form";

export function DetailedContactPage() {
  const { contactId } = useParams({
    from: "/_contacts-layout/_fallback-layout/$contactId",
  });
  const isForEdit = useContactStore(useShallow((state) => state.isForEdit));
  const { data: contact } = useQuery(ContactAPI.getContactById(contactId));

  if (!contact) {
    return <Navigate to="/contacts" />;
  }

  const ContactComponent = isForEdit ? ContactEditForm : DetailedContactView;

  return <ContactComponent contact={contact} />;
}
