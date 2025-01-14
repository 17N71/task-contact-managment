import { useParams } from "@tanstack/react-router";
import { ContactListitem } from "./contact-list-item";
import type { ContactLinkParams, ContactListProps } from "../model/types";

export function ContactList({
  filteredList,
  selectedId,
  setSelectedId,
}: ContactListProps) {
  const params: ContactLinkParams = useParams({ from: "/_contacts-layout" });
  return (
    <ul className="space-y-2 mt-4">
      {filteredList?.map((item) => {
        const isSelected = item?.id === selectedId && !!params?.contactId;
        return (
          <ContactListitem
            key={item?.id}
            isSelected={isSelected}
            onSelect={() => setSelectedId(String(item?.id))}
            {...item!}
          />
        );
      })}
    </ul>
  );
}
