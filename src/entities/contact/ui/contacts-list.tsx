import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { UserAPI } from "../api";
import type { ContactLinkParams } from "../model/types";
import { useFilteredList } from "../model/useFilteredList";

import { ContactListitem } from "./contact-list-item";

export function UsersList() {
  const params: ContactLinkParams = useParams({ from: "/_contacts-layout" });
  const [selectedId, setSelectedId] = useState<string | null>(
    params?.contactId ?? null
  );
  const { data, isLoading } = useQuery(UserAPI.getUsers());
  const { filteredList, onChange, searchTerm } = useFilteredList(
    data!,
    selectedId!
  );

  if (isLoading) {
    return "...";
  }

  return (
    <div className="w-full max-w-sm p-4 bg-secondary rounded-md">
      <div>
        <input
          onChange={onChange}
          value={searchTerm}
          type="search"
          className="border border-black border-solid outline-none rounded-sm p-1 text-black"
          placeholder=" search"
        />
        <button
          type="button"
          className="p-1 px-3 inline-flex justify-center items-center ml-2 border border-solid border-black text-lg"
        >
          <Link
            to="."
            state={true}
            from="/contacts"
            className="text-blue-500 text-sm py-0.5"
          >
            New
          </Link>
        </button>
      </div>
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
    </div>
  );
}
