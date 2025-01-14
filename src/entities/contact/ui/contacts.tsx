import { useState } from "react";
import { useParams } from "@tanstack/react-router";
import { ContactsFilterBar } from "./contacts-filter-bar";
import { useQuery } from "@tanstack/react-query";
import { useFilteredList } from "../model/useFilteredList";
import { UserAPI } from "../api";
import type { ContactLinkParams } from "../model/types";
import { ContactList } from "./contacts-list";

export function Contacts() {
  const params: ContactLinkParams = useParams({ from: "/_contacts-layout" });
  const [selectedId, setSelectedId] = useState<string | null>(
    params?.contactId ?? null
  );
  const { data, isLoading, error } = useQuery(UserAPI.getUsers());
  const { filteredList, onChange, searchTerm } = useFilteredList(
    data!,
    selectedId!
  );

  if (isLoading) {
    return "...";
  }

  if (error) {
    return "Error";
  }

  return (
    <div className="w-full max-w-sm p-4 bg-secondary rounded-md">
      <ContactsFilterBar onChange={onChange} searchTerm={searchTerm} />
      <ContactList
        filteredList={filteredList}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
      />
    </div>
  );
}
