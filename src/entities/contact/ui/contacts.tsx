import { useState } from "react";
import { ContactsFilterBar } from "./contacts-filter-bar";
import { useQuery } from "@tanstack/react-query";
import { useFilteredList } from "../model/useFilteredList";
import { ContactAPI } from "../api";
import { ContactList } from "./contacts-list";
import type { ContactProps } from "../model/types";

export function Contacts({ initialContactId }: ContactProps) {
  const [selectedId, setSelectedId] = useState<string | null>(
    initialContactId || null
  );

  const { data, isLoading, error } = useQuery(ContactAPI.getContacts());

  const { filteredList, onChange, searchTerm } = useFilteredList(
    data ?? []!
    // selectedId!
  );

  if (isLoading) {
    return "...";
  }

  if (error) {
    return "Error";
  }

  return (
    <div className="w-full pb-4 px-4 flex flex-col max-w-wsm overflow-y-auto h-full  bg-secondary rounded-md border-r border-gray-300/40 rounded-tr-none">
      <ContactsFilterBar onChange={onChange} searchTerm={searchTerm} />
      <hr />
      <ContactList
        contactId={initialContactId}
        filteredList={filteredList}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  );
}
