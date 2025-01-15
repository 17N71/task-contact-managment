import { ContactListitem } from "./contact-list-item";
import type { ContactListProps } from "../model/types";

export function ContactList({
  filteredList,
  selectedId,
  contactId,
  setSelectedId,
}: ContactListProps) {
  return (
    <ul className="space-y-2 mt-4 h-screen">
      {filteredList?.map((item) => {
        const isSelected = item?.id === selectedId && !!contactId;
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
