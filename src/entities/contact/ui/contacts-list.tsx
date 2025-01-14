import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { UserAPI } from "../api";
import { cn } from "~/shared/utils/cn";
import type { ContactLinkParams } from "../model/types";
import { useFilteredList } from "../model/useFilteredList";

export function UsersList() {
  const params: ContactLinkParams = useParams({ from: "/_contacts-layout" });
  const [selectedId, setSelectedId] = useState<string | null>(
    params?.contactId ?? null
  );
  const { data, isLoading } = useQuery(UserAPI.getUsers());
  const { filteredList, onChange, searchTerm } = useFilteredList(data!);
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
          const isSelected = item.id === selectedId && params?.contactId;
          return (
            <li
              key={item.id}
              className={cn("rounded-md cursor-pointer transition-colors", {
                ["bg-blue-600 text-white"]: isSelected,
                ["hover:bg-gray-100"]: !isSelected,
              })}
            >
              <Link
                className="w-full px-4 py-2 h-full block"
                onClick={() => setSelectedId(String(item.id))}
                to="/$contactId"
                params={{ contactId: String(item.id) }}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
