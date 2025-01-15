import { ContactListitem } from "./contact-list-item";
import type { ContactLinkParams, ContactListProps } from "../model/types";
import { useContactStore } from "../model/store/contact";
import { useShallow } from "zustand/shallow";
import { useParams } from "@tanstack/react-router";

export function ContactList({
  filteredList,
  contactId,
  setSelectedId,
}: ContactListProps) {
  const params: ContactLinkParams = useParams({
    from: "/_contacts-layout",
  });
  const { isForEdit, setEditMode } = useContactStore(
    useShallow((state) => ({
      isForEdit: state.isForEdit,
      setEditMode: state.setEditMode,
    }))
  );

  return (
    <ul className="space-y-2 mt-4 h-screen">
      {filteredList?.map((item) => {
        const isSelected = item?.id === params.contactId && !!contactId;
        return (
          <ContactListitem
            key={item?.id}
            isSelected={isSelected}
            onSelect={() => {
              setSelectedId(String(item?.id));
              if (isForEdit) {
                setEditMode(false);
              }
            }}
            {...item!}
          />
        );
      })}
    </ul>
  );
}
